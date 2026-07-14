import { faqs } from "@/lib/content";

export function FaqSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div className="scroll-reveal">
          <p className="section-kicker">вопросы</p>
          <h2 className="section-title text-4xl font-semibold md:text-5xl">Частые вопросы</h2>
          <p className="mt-5 max-w-sm leading-7 text-neutral-600">
            Короткие ответы на вопросы, с которыми чаще всего обращаются до первой консультации.
          </p>
        </div>
        <div className="grid gap-3 scroll-reveal">
          {faqs.map((item) => (
            <details key={item.q} className="group elevated-card rounded-3xl p-6 transition hover:shadow-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                {item.q}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 text-2xl transition group-open:rotate-45 group-open:bg-black group-open:text-white">+</span>
              </summary>
              <p className="mt-5 leading-7 text-neutral-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
