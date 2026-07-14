"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";

type YandexMapInstance = {
  destroy: () => void;
  setCenterAndZoom: (
    center: [number, number],
    zoom: number,
    options?: { duration?: number }
  ) => void;
  geoObjects: {
    add: (object: YandexPlacemarkInstance) => void;
  };
};

type YandexPlacemarkInstance = {
  events: {
    add: (eventName: string, handler: () => void) => void;
  };
};

type YandexMapsApi = {
  ready: (callback: () => void) => void;
  Map: new (
    element: HTMLElement,
    options: {
      center: [number, number];
      zoom: number;
      controls?: string[];
      behaviors?: string[];
    }
  ) => YandexMapInstance;
  Placemark: new (
    coordinates: [number, number],
    properties?: Record<string, unknown>,
    options?: Record<string, unknown>
  ) => YandexPlacemarkInstance;
};

declare global {
  interface Window {
    ymaps?: YandexMapsApi;
  }
}

const INITIAL_ZOOM = 15;
const CLICK_ZOOM = 17;
const ANIMATION_DURATION = 500;
const SCRIPT_ID = "yandex-maps-api";

function loadScript(apiKey: string) {
  return new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (existingScript) {
      if (window.ymaps) {
        resolve();
        return;
      }

      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Не удалось загрузить Яндекс.Карты")), {
        once: true
      });
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Не удалось загрузить Яндекс.Карты"));
    document.head.appendChild(script);
  });
}

export function YandexMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<YandexMapInstance | null>(null);
  const [isMapError, setIsMapError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const initMap = () => {
      if (!mounted || !containerRef.current || !window.ymaps || mapRef.current) return;

      window.ymaps.ready(() => {
        if (!mounted || !containerRef.current || !window.ymaps || mapRef.current) return;

        const map = new window.ymaps.Map(containerRef.current, {
          center: siteConfig.mapCenter,
          zoom: INITIAL_ZOOM,
          controls: ["zoomControl", "fullscreenControl"],
          behaviors: ["drag", "dblClickZoom", "multiTouch"]
        });

        const placemark = new window.ymaps.Placemark(
          siteConfig.mapMarker,
          {
            balloonContentHeader: "Адвокат Антипова Елена Сергеевна",
            balloonContentBody: siteConfig.address,
            hintContent: siteConfig.address
          },
          {
            preset: "islands#blackIcon"
          }
        );

        placemark.events.add("click", () => {
          map.setCenterAndZoom(siteConfig.mapMarker, CLICK_ZOOM, {
            duration: ANIMATION_DURATION
          });
        });

        map.geoObjects.add(placemark);
        mapRef.current = map;
      });
    };

    const loadMap = async () => {
      try {
        if (!window.ymaps) {
          const response = await fetch("/api/maps");
          if (!response.ok) throw new Error("API-ключ Яндекс.Карт не настроен");

          const apiKey = (await response.text()).trim();
          if (!apiKey) throw new Error("API-ключ Яндекс.Карт пустой");

          await loadScript(apiKey);
        }

        initMap();
      } catch (error) {
        console.error("Ошибка при загрузке Яндекс.Карт:", error);
        if (mounted) setIsMapError(true);
      }
    };

    loadMap().catch((error) => {
      console.error("Ошибка при инициализации карты:", error);
      if (mounted) setIsMapError(true);
    });

    return () => {
      mounted = false;

      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
    };
  }, []);

  if (isMapError) {
    return (
      <div className="flex h-full min-h-[420px] flex-col justify-between rounded-[32px] border border-black/10 bg-[#f7f7f4] p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">яндекс карта</p>
          <h3 className="mt-3 text-2xl font-semibold">{siteConfig.address}</h3>
        </div>
        <a
          href={`https://yandex.ru/maps/?text=${encodeURIComponent(siteConfig.address)}`}
          target="_blank"
          rel="noreferrer"
          className="btn-dark mt-6"
        >
          Открыть адрес в Яндекс.Картах
        </a>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[420px] overflow-hidden rounded-[32px] border border-black/10 bg-[#eeeeea]">
      <div ref={containerRef} className="absolute inset-0" aria-label={`Карта: ${siteConfig.address}`} />
      <div className="pointer-events-none absolute left-4 top-4 rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold shadow-card backdrop-blur-md">
        {siteConfig.address}
      </div>
    </div>
  );
}
