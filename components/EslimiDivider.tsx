export default function EslimiDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center py-12 md:py-16 ${className}`} aria-hidden="true">
      <svg
        width="200"
        height="24"
        viewBox="0 0 200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold"
      >
        <path
          d="M0 12 Q25 4 50 12 Q75 20 100 12 Q125 4 150 12 Q175 20 200 12"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.5"
        />
        <path
          d="M0 15 Q25 7 50 15 Q75 23 100 15 Q125 7 150 15 Q175 23 200 15"
          stroke="currentColor"
          strokeWidth="0.35"
          opacity="0.3"
        />
        <path
          d="M0 9 Q25 17 50 9 Q75 1 100 9 Q125 17 150 9 Q175 1 200 9"
          stroke="currentColor"
          strokeWidth="0.35"
          opacity="0.3"
        />
        <circle cx="100" cy="12" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="33.3" cy="12" r="1.2" fill="currentColor" opacity="0.35" />
        <circle cx="166.7" cy="12" r="1.2" fill="currentColor" opacity="0.35" />
      </svg>
    </div>
  );
}
