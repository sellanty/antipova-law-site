import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site-config";
import { navItems } from "@/lib/content";

type HeaderProps = {
  onContactClick: () => void;
};

export function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f5f3ee]/88 shadow-[0_12px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="container-page flex min-h-20 items-center justify-between gap-5 py-3">
        <a href="#top" aria-label="В начало сайта" className="transition hover:-translate-y-0.5">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 rounded-full border border-black/10 bg-white/52 px-6 py-3 text-sm font-medium text-neutral-700 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="link-underline hover:text-black">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href={`tel:${siteConfig.phoneRaw}`} className="hidden rounded-full border border-black/10 bg-white/50 px-4 py-3 text-sm font-semibold transition hover:bg-white sm:block">
            {siteConfig.phoneView}
          </a>
          <button type="button" className="btn-dark px-4 py-3 text-sm sm:px-5" onClick={onContactClick}>
            Обратиться
          </button>
        </div>
      </div>
    </header>
  );
}
