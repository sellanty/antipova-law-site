import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-neutral-950 py-10 text-white">
      <div className="container-page grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
        <div>
          <p className="text-base font-semibold">{siteConfig.lawyerName}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">
            Адвокат по уголовным делам. Регистрационный номер {siteConfig.registry.number} в реестре адвокатов {siteConfig.registry.region}.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Контакты</p>
          <div className="mt-3 space-y-2 text-sm text-white/70">
            <a className="block transition hover:text-white" href={`tel:${siteConfig.phoneRaw}`}>
              {siteConfig.phoneView}
            </a>
            <a
              className="block transition hover:text-white"
              href={siteConfig.vkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.vkView}
            </a>
            <p>{siteConfig.address}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Официальные ресурсы</p>
          <div className="mt-3 space-y-2 text-sm">
            {siteConfig.officialLinks.map((link) => (
              <a
                key={link.href}
                className="block text-white/70 underline-offset-4 transition hover:text-white hover:underline"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-white/45 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Антипова Елена Сергеевна.</p>
        <p>Информация на сайте не является публичной офертой. Результат зависит от обстоятельств дела.</p>
      </div>
    </footer>
  );
}
