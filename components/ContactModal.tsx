"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ContactModal({ open, onClose }: ContactModalProps) {
  useEffect(() => {
    document.body.classList.toggle("modal-open", open);
    return () => document.body.classList.remove("modal-open");
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-md" onClick={onClose}>
      <div className="w-full max-w-lg overflow-hidden rounded-[32px] bg-[#f7f5ef] shadow-soft" onClick={(event) => event.stopPropagation()}>
        <div className="h-2 bg-[var(--accent)]" />
        <div className="p-6 md:p-8">
          <div className="mb-7 flex items-start justify-between gap-4">
            <div>
              <p className="section-kicker">обращение</p>
              <h2 className="section-title text-4xl font-semibold">Связаться с адвокатом</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/70 text-2xl transition hover:bg-black hover:text-white"
              aria-label="Закрыть окно"
            >
              ×
            </button>
          </div>
          <p className="mb-6 text-neutral-600">
            Консультация платная. Позвоните напрямую или напишите во ВКонтакте, чтобы кратко описать ситуацию и согласовать дальнейший порядок работы.
          </p>
          <div className="grid gap-3">
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-dark w-full">
              <PhoneIcon /> Позвонить {siteConfig.phoneView}
            </a>
            <a href={siteConfig.vkUrl} target="_blank" rel="noreferrer" className="btn-light w-full bg-white/80">
              Написать во ВКонтакте <ArrowIcon />
            </a>
          </div>
          <p className="mt-5 text-sm text-neutral-500">
            Адрес офиса: {siteConfig.address}. Точный порядок встречи лучше предварительно согласовать по телефону.
          </p>
        </div>
      </div>
    </div>
  );
}
