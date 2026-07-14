import { caseExamples } from "@/lib/content";

export function CasesSection() {
  return (
    <section id="cases" className="soft-band py-16 md:py-24">
      <div className="container-page scroll-reveal">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">примеры ситуаций</p>
            <h2 className="section-title max-w-3xl text-4xl font-semibold md:text-5xl">Как может выглядеть работа по делу</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-neutral-500">
            Ниже — условные примеры для понимания подхода. Это не описание реальных дел и не гарантия конкретного результата.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {caseExamples.map((item) => (
            <article key={item.title} className="card-hover elevated-card rounded-[32px] p-7">
              <span className="rounded-full border border-black/10 bg-white/65 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-500">{item.tag}</span>
              <h3 className="mt-6 text-2xl font-semibold leading-tight">{item.title}</h3>
              <p className="mt-5 leading-7 text-neutral-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
