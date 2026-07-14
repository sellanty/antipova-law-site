import { siteConfig } from "@/lib/site-config";
import { reviews } from "@/lib/content";

const reviewScreens = [siteConfig.images.reviewOne, siteConfig.images.reviewTwo];

export function ReviewsSection() {
  return (
    <section id="reviews" className="soft-band py-16 md:py-24">
      <div className="container-page scroll-reveal">
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker">отзывы</p>
          <h2 className="section-title text-4xl font-semibold md:text-5xl">Отзывы доверителей из ВКонтакте</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {reviews.map((review, index) => (
            <article key={review.title} className="elevated-card relative overflow-hidden rounded-[36px] p-7 md:p-8">
              <div className="absolute right-6 top-6 section-title text-8xl leading-none text-neutral-200">“</div>
              <div className="relative z-10">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">{review.source}</span>
                  {review.date ? <span className="text-sm text-neutral-500">{review.date}</span> : null}
                </div>
                <h3 className="max-w-xl text-2xl font-semibold leading-tight">{review.title}</h3>
                <p className="mt-5 leading-7 text-neutral-600">{review.text}</p>
                <a href={siteConfig.vkUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex text-sm font-semibold text-[var(--accent)] hover:underline">
                  Смотреть страницу ВКонтакте
                </a>
              </div>

              <details className="relative z-10 mt-6 rounded-3xl border border-black/10 bg-[#f7f5ef] p-4">
                <summary className="cursor-pointer text-sm font-semibold text-neutral-700">Показать скриншот отзыва</summary>
                <div className="mt-4 max-h-[420px] overflow-auto rounded-2xl border border-black/10 bg-neutral-900 p-2">
                  <img src={reviewScreens[index]} alt={`Скриншот отзыва из ВКонтакте ${index + 1}`} className="w-full rounded-xl" />
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
