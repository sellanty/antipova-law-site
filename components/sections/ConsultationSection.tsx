import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { siteConfig } from "@/lib/site-config";

type ConsultationSectionProps = {
  onContactClick: () => void;
};

export function ConsultationSection({ onContactClick }: ConsultationSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page scroll-reveal rounded-[42px] bg-black p-7 text-white shadow-soft md:p-12 lg:p-14 ink-panel">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_.78fr] lg:items-end">
          <div>
            <p className="section-kicker">консультация</p>
            <h2 className="section-title max-w-3xl text-4xl font-semibold md:text-6xl">Нужна помощь по уголовному делу?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Опишите ситуацию и получите первичный план действий. Консультация платная, стоимость уточняется при обращении.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <button type="button" onClick={onContactClick} className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-[#f5f3ee]">
              Открыть контакты <ArrowIcon />
            </button>
            <a href={`tel:${siteConfig.phoneRaw}`} className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10">
              <PhoneIcon /> {siteConfig.phoneView}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
