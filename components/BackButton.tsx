import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="fixed top-4 left-4 z-40 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white transition-colors text-espresso/60 hover:text-espresso"
      aria-label="بازگشت به صفحه اصلی"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
    </Link>
  );
}
