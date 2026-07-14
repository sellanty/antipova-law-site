import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container-page scroll-reveal">
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker">услуги</p>
          <h2 className="section-title text-4xl font-semibold md:text-5xl">Юридическая помощь по уголовным делам</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card-hover elevated-card flex min-h-[230px] flex-col justify-between rounded-[32px] p-7">
              <div>
                <div className="mb-6 h-px w-14 bg-[var(--accent)]" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="mt-6 leading-7 text-neutral-600">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
