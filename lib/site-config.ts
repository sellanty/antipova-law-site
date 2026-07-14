import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.ru",
  lawyerName: "Антипова Елена Сергеевна",
  shortLogoText: "АЕ",
  specialization: "адвокат по уголовным делам",
  city: "Липецк",
  phoneRaw: "+79092184365",
  phoneView: "+7 909 218-43-65",
  vkUrl: "https://vk.com/id375106472",
  vkView: "vk.com/id375106472",
  address: "Липецк, Студеновская улица, 19, помещение 1",
  office: "Студеновская улица, 19, помещение 1",
  registry: {
    number: "48/506",
    region: "Липецкая область"
  },
  experience: {
    totalSince: "с 2000 года",
    totalYears: "26 лет",
    advocacyYears: "17 лет",
    judicialYears: "9 лет"
  },
  mapCenter: [52.6188, 39.6218],
  mapMarker: [52.6188, 39.6218],
  images: {
    hero: "/images/elena-main.jpg",
    about: "/images/elena-laptop.jpg",
    colleagues: "/images/elena-colleagues.jpg",
    portrait: "/images/elena-portrait.jpg",
    reviewOne: "/images/review-vk-1.jpg",
    reviewTwo: "/images/review-vk-2.jpg"
  },
  officialLinks: [
    {
      label: "ФПА РФ",
      href: "https://fparf.ru/"
    },
    {
      label: "Адвокатская палата Липецкой области",
      href: "https://aplip.fparf.ru/"
    },
    {
      label: "Адвокатская газета",
      href: "https://www.advgazeta.ru/"
    }
  ]
};
