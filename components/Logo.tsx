import { siteConfig } from "@/lib/site-config";

export function Logo() {
  return (
    <div className="flex items-center gap-3" aria-label={`Логотип адвоката ${siteConfig.lawyerName}`}>
      <div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-black bg-black text-white shadow-card">
        <div className="absolute inset-x-2 top-2 h-px bg-white/35" />
        <span className="font-serif text-[18px] tracking-[-0.08em]">{siteConfig.shortLogoText}</span>
        <div className="absolute bottom-2 h-px w-5 bg-white/40" />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-semibold uppercase tracking-[0.22em]">Антипова</p>
        <p className="text-xs text-neutral-500">{siteConfig.specialization}</p>
      </div>
    </div>
  );
}
