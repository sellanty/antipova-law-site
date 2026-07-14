import { HomePage } from "@/components/HomePage";
import { siteConfig } from "@/lib/site-config";

const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: `Адвокат ${siteConfig.lawyerName}`,
  description:
    "Адвокат по уголовным делам в Липецке. Консультация платная.",
  areaServed: siteConfig.city,
  telephone: siteConfig.phoneRaw,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    streetAddress: siteConfig.office,
    addressCountry: "RU",
  },
  url: siteConfig.siteUrl,
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.mapMarker[0],
    longitude: siteConfig.mapMarker[1],
  },
  sameAs: [siteConfig.vkUrl],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
      />
      <HomePage />
    </>
  );
}
