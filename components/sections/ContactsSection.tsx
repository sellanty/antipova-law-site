import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { YandexMap } from "@/components/YandexMap";
import { siteConfig } from "@/lib/site-config";

type ContactsSectionProps = {
  onContactClick: () => void;
};

export function ContactsSection({ onContactClick }: ContactsSectionProps) {
  return (
    <section id="contacts" className="soft-band py-16 md:py-24">
      <div className="container-page scroll-reveal">
        <div className="grid overflow-hidden rounded-[42px] border border-black/10 bg-white shadow-soft lg:grid-cols-[.9fr_1.1fr]">
          <div className="p-7 md:p-10 lg:p-12">
            <p className="section-kicker">контакты</p>
            <h2 className="section-title text-4xl font-semibold md:text-5xl">Свяжитесь удобным способом</h2>
            <div className="mt-8 grid gap-5">
              <div className="rounded-3xl border border-black/10 bg-[#f7f5ef] p-5">
                <p className="text-sm text-neutral-500">Телефон</p>
                <a href={`tel:${siteConfig.phoneRaw}`} className="mt-1 block text-2xl font-semibold">
                  {siteConfig.phoneView}
                </a>
              </div>
              <div className="rounded-3xl border border-black/10 bg-[#f7f5ef] p-5">
                <p className="text-sm text-neutral-500">ВКонтакте</p>
                <a
                  href={siteConfig.vkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-lg font-semibold"
                >
                  {siteConfig.vkView} <ArrowIcon />
                </a>
              </div>
              <div className="rounded-3xl border border-black/10 bg-[#f7f5ef] p-5">
                <p className="text-sm text-neutral-500">Адрес</p>
                <p className="mt-1 text-lg font-semibold">{siteConfig.address}</p>
              </div>
            </div>
            <button type="button" className="btn-dark mt-9" onClick={onContactClick}>
              Получить консультацию
            </button>
          </div>

          <div className="min-h-[420px] border-t border-black/10 bg-[#eeeeea] p-4 lg:border-l lg:border-t-0">
            <YandexMap />
          </div>
        </div>
      </div>
    </section>
  );
}
