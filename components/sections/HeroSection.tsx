import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { siteConfig } from "@/lib/site-config";

type HeroSectionProps = {
  onContactClick: () => void;
};

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 -z-20 h-[74%] bg-[linear-gradient(180deg,rgba(17,17,17,0.04),rgba(17,17,17,0))]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-white/75 blur-3xl" />
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-[var(--accent-soft)] blur-3xl" />

      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.04fr_.96fr]">
        <div>
          <div className="reveal mb-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-neutral-700 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Липецк · уголовные дела · платная консультация
          </div>

          <h1 className="reveal reveal-delay-1 section-title max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Адвокат по уголовным делам в Липецке
          </h1>

          <p className="reveal reveal-delay-2 mt-7 max-w-2xl border-l-2 border-[var(--accent)] pl-5 text-lg leading-8 text-neutral-600 md:text-xl">
            {siteConfig.lawyerName}. Защита на стадии проверки, следствия и суда. Помощь при задержании, допросе, обыске, обвинении и обжаловании судебных решений.
          </p>

          <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <button type="button" className="btn-dark" onClick={onContactClick}>
              Получить консультацию <ArrowIcon />
            </button>
            <a href={siteConfig.vkUrl} target="_blank" rel="noreferrer" className="btn-light">
              Написать во ВКонтакте
            </a>
          </div>

          <div className="reveal reveal-delay-4 mt-10 grid gap-4 sm:grid-cols-3">
            <div className="glass-card rounded-3xl p-5 shadow-[0_16px_50px_rgba(0,0,0,0.045)]">
              <p className="text-3xl font-semibold">26</p>
              <p className="mt-1 text-sm text-neutral-500">лет юридического стажа</p>
            </div>
            <div className="glass-card rounded-3xl p-5 shadow-[0_16px_50px_rgba(0,0,0,0.045)]">
              <p className="text-3xl font-semibold">17</p>
              <p className="mt-1 text-sm text-neutral-500">лет адвокатской деятельности</p>
            </div>
            <div className="glass-card rounded-3xl p-5 shadow-[0_16px_50px_rgba(0,0,0,0.045)]">
              <p className="text-3xl font-semibold">9</p>
              <p className="mt-1 text-sm text-neutral-500">лет в судебной системе</p>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[560px]">
          <div className="float-slow absolute -right-3 top-8 z-10 hidden rounded-3xl bg-black px-5 py-4 text-white shadow-soft sm:block">
            <p className="text-xs uppercase tracking-[0.24em] text-white/55">важно</p>
            <p className="mt-1 max-w-48 text-sm">Не давайте показания без понимания правовой позиции.</p>
          </div>
          <div className="photo-frame aspect-[4/5] max-h-[720px] overflow-hidden rounded-[42px] border border-black/10 bg-white shadow-soft">
            <img src={siteConfig.images.hero} alt="Фотография адвоката в рабочем кабинете" className="h-full w-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}
