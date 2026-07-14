export type NavItem = {
  href: string;
  label: string;
};

export type TextCard = {
  title: string;
  text: string;
};

export type CrimeCategoryIconType = "economic" | "official" | "personality" | "management" | "drugs" | "other";

export type CrimeCategoryItem = TextCard & {
  icon: CrimeCategoryIconType;
};

export type StepItem = {
  step: string;
  title: string;
  text: string;
};

export type CaseItem = {
  title: string;
  tag: string;
  text: string;
};

export type ReviewItem = {
  title: string;
  source: string;
  date?: string;
  text: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type Coordinates = [number, number];

export type SiteImages = {
  hero: string;
  about: string;
  colleagues: string;
  portrait: string;
  reviewOne: string;
  reviewTwo: string;
};

export type ExperienceInfo = {
  totalSince: string;
  totalYears: string;
  advocacyYears: string;
  judicialYears: string;
};

export type RegistryInfo = {
  number: string;
  region: string;
};

export type OfficialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  siteUrl: string;
  lawyerName: string;
  shortLogoText: string;
  specialization: string;
  city: string;
  phoneRaw: string;
  phoneView: string;
  vkUrl: string;
  vkView: string;
  address: string;
  office: string;
  registry: RegistryInfo;
  experience: ExperienceInfo;
  mapCenter: Coordinates;
  mapMarker: Coordinates;
  images: SiteImages;
  officialLinks: OfficialLink[];
};
