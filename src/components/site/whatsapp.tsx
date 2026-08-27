import { site } from "@/lib/site";

/**
 * Floating WhatsApp enquiry button.
 * Renders on every page via the root layout; opens a pre-filled chat.
 */
export function WhatsAppButton() {
  const number = site.whatsapp.replace(/\D/g, "");
  if (!number) return null;

  const href = `https://wa.me/${number}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Enquire on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-gold/40 bg-ink py-3 pl-3 pr-3 shadow-lg transition-all duration-300 hover:pr-6 sm:bottom-8 sm:right-8"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-ink">
          <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.05h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.69 8.23-8.23 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
        </svg>
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[0.7rem] uppercase tracking-[0.2em] text-background opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:opacity-100">
        WhatsApp us
      </span>
    </a>
  );
}
