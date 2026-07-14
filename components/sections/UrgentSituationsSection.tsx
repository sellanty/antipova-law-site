import { urgentSituations } from "@/lib/content";

export function UrgentSituationsSection() {
  return (
    <section className="soft-band py-16 md:py-24">
      <div className="container-page scroll-reveal">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">когда нужна помощь</p>
            <h2 className="section-title max-w-3xl text-4xl font-semibold md:text-5xl">
              Не откладывайте обращение, если ситуация уже связана с полицией или следствием
            </h2>
          </div>
          <p className="max-w-md text-neutral-600">
            Чем раньше подключается адвокат, тем меньше риск ошибок в объяснениях, протоколах и процессуальных документах.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {urgentSituations.map((item, index) => (
            <div key={item} className="card-hover elevated-card rounded-3xl p-6">
              <p className="mb-5 text-sm font-semibold text-[var(--accent)]">0{index + 1}</p>
              <h3 className="text-lg font-semibold leading-snug">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
