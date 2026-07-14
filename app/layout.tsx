import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Антипова Елена Сергеевна — адвокат по уголовным делам в Липецке",
  description:
    "Адвокат по уголовным делам в Липецке. Защита на стадии проверки, следствия и суда. Консультация платная.",
  keywords: [
    "адвокат Липецк",
    "адвокат по уголовным делам Липецк",
    "уголовный адвокат",
    "защита по уголовным делам",
    "Антипова Елена Сергеевна"
  ],
  openGraph: {
    title: "Антипова Елена Сергеевна — адвокат по уголовным делам",
    description:
      "Защита по уголовным делам в Липецке: проверка, следствие, суд. Консультация платная.",
    url: siteConfig.siteUrl,
    siteName: "Адвокат Антипова Е.С.",
    locale: "ru_RU",
    type: "website"
  },
  alternates: {
    canonical: siteConfig.siteUrl
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/icons/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="noise antialiased">{children}</body>
    </html>
  );
}
