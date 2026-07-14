import { workSteps } from "@/lib/content";

export function WorkStepsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page scroll-reveal">
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker">порядок работы</p>
          <h2 className="section-title text-4xl font-semibold md:text-5xl">Понятный план действий с первого обращения</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {workSteps.map((item) => (
            <div key={item.step} className="elevated-card rounded-[32px] p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <p className="section-title text-5xl font-semibold text-neutral-300">{item.step}</p>
              <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-neutral-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
