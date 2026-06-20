import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventName, eventId, eventUrl, clientIp, userAgent, userData } = body;

    const PIXEL_ID = process.env.META_PIXEL_ID;
    const ACCESS_TOKEN = process.env.META_CAPI_TOKEN;

    if (!PIXEL_ID || !ACCESS_TOKEN) {
      return NextResponse.json(
        { error: 'Meta Pixel ID or Access Token is missing' },
        { status: 500 }
      );
    }

    const currentTimestamp = Math.floor(Date.now() / 1000);

    const payload = {
      data: [
        {
          event_name: eventName || 'PageView',
          event_time: currentTimestamp,
          event_id: eventId,
          event_source_url: eventUrl,
          action_source: 'website',
          user_data: {
            client_ip_address: clientIp,
            client_user_agent: userAgent,
            ...userData,
          },
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Meta CAPI Error:', data);
      return NextResponse.json(
        { error: 'Failed to send event to Meta CAPI', details: data },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in CAPI route:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
