import { ThemisIcon } from "@/components/icons/ThemisIcon";
import { advantages } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const experienceCards = [
  {
    value: siteConfig.experience.totalYears,
    label: `юридический стаж ${siteConfig.experience.totalSince}`
  },
  {
    value: siteConfig.experience.advocacyYears,
    label: "чистой адвокатской деятельности"
  },
  {
    value: siteConfig.experience.judicialYears,
    label: "работы в государственных органах и в суде"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="dark-section ink-panel py-16 text-white md:py-24">
      <div className="container-page relative z-10 grid gap-10 lg:grid-cols-[.86fr_1.14fr] lg:items-center">
        <div className="photo-frame aspect-[1/1] min-h-[360px] overflow-hidden rounded-[40px] border border-white/10 bg-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.45)] lg:aspect-[4/5]">
          <img src={siteConfig.images.about} alt="Рабочая фотография адвоката за ноутбуком" className="h-full w-full object-cover" />
        </div>

        <div className="scroll-reveal">
          <p className="section-kicker">о специалисте</p>
          <h2 className="section-title text-4xl font-semibold md:text-5xl">{siteConfig.lawyerName}</h2>
          <p className="mt-7 text-lg leading-8 text-white/72">
            Адвокат, специализирующийся на уголовных делах. Основная задача — своевременно оценить риски, защитить права доверителя и выстроить понятную правовую позицию на каждой стадии дела.
          </p>

          <div className="mt-8 overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.06] backdrop-blur-md">
            <div className="grid gap-0 lg:grid-cols-[190px_1fr]">
              <div className="flex items-center justify-center border-b border-white/10 bg-white/[0.05] p-7 lg:border-b-0 lg:border-r">
                <div className="grid h-28 w-28 place-items-center rounded-[30px] bg-white p-5 text-black shadow-[0_20px_55px_rgba(0,0,0,0.28)]">
                  <ThemisIcon />
                </div>
              </div>

              <div className="p-5 md:p-6">
                <div className="grid gap-3 sm:grid-cols-3">
                  {experienceCards.map((card) => (
                    <div key={card.label} className="group rounded-[26px] border border-white/10 bg-black/20 p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]">
                      <div className="mb-4 h-px w-12 bg-white/45 transition group-hover:w-16" />
                      <p className="section-title text-4xl font-semibold leading-none text-white md:text-5xl">{card.value}</p>
                      <p className="mt-3 min-h-12 text-sm leading-6 text-white/62">{card.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/42">реестр адвокатов</p>
                  <p className="mt-2 leading-7 text-white/72">
                    Регистрационный номер <span className="font-semibold text-white">{siteConfig.registry.number}</span> в реестре адвокатов: <span className="font-semibold text-white">{siteConfig.registry.region}</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {advantages.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/[0.09]">
                <p className="leading-7 text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
