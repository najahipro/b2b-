export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 210 50" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Browser Window */}
      <g transform="translate(0, -2)">
        <rect x="10" y="8" width="34" height="24" rx="2" fill="none" stroke="#f97316" strokeWidth="2.5" />
        <path d="M10 15h34" stroke="#f97316" strokeWidth="2.5" />
        <circle cx="14" cy="11.5" r="1.2" fill="#f97316" />
        <circle cx="18" cy="11.5" r="1.2" fill="#f97316" />
        <circle cx="22" cy="11.5" r="1.2" fill="#f97316" />
        <path d="M26 11.5h14" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" />
        
        <rect x="14" y="19" width="12" height="9" fill="#f97316" />
        <rect x="29" y="19" width="11" height="3" fill="#f97316" />
        <rect x="29" y="24" width="4" height="4" fill="#f97316" />
        <rect x="36" y="24" width="4" height="4" fill="#f97316" />
      </g>



      {/* Text */}
      <text 
        x="55" 
        y="36" 
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
        fontWeight="800" 
        fontSize="34" 
        letterSpacing="-1"
      >
        <tspan className="fill-gray-950 dark:fill-gray-50">idmis</tspan>
        <tspan fill="#f97316">k</tspan>
      </text>
      <text 
        x="164" 
        y="22" 
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
        fontWeight="600" 
        fontSize="15" 
        className="fill-gray-600 dark:fill-gray-400"
      >
        .com
      </text>
    </svg>
  );
}
