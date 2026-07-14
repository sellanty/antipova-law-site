import { CrimeCategoryIcon } from "@/components/icons/CrimeCategoryIcon";
import { ThemisIcon } from "@/components/icons/ThemisIcon";
import { crimeCategories } from "@/lib/content";

export function CrimeCategoriesSection() {
  return (
    <section id="categories" className="py-16 md:py-24">
      <div className="container-page scroll-reveal">
        <div className="mb-10 grid gap-6 lg:grid-cols-[.95fr_1.05fr] lg:items-end">
          <div>
            <p className="section-kicker">категории преступлений</p>
            <h2 className="section-title max-w-3xl text-4xl font-semibold md:text-5xl">
              Помощь по рассматриваемым категориям уголовных дел
            </h2>
          </div>
          <div className="elevated-card flex items-center gap-5 rounded-[32px] p-5">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-black p-3 text-white shadow-card">
              <ThemisIcon />
            </div>
            <p className="leading-7 text-neutral-600">
              Основные направления защиты и правового сопровождения по уголовным делам.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {crimeCategories.map((category) => (
            <article key={category.title} className="card-hover elevated-card rounded-[32px] p-7">
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-black/10 bg-[#f7f5ef] text-[var(--accent)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.75)]">
                <CrimeCategoryIcon type={category.icon} />
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="mt-4 leading-7 text-neutral-600">{category.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
