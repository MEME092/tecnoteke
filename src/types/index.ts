export interface Category {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  focusAreas: string[];
  image: string;
  altText: string;
}

export interface PracticalStep {
  number: number;
  title: string;
  description: string;
  tip?: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string[];
  steps?: PracticalStep[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  callout?: {
    type: 'info' | 'warning' | 'tip';
    title: string;
    text: string;
  };
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleReference {
  citation: string;
  source: string;
  year?: string;
  url?: string;
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  categorySlug: string;
  scientificName?: string;
  image: string;
  altText: string;
  author: string;
  authorRole: string;
  publishDate: string;
  readTimeMinutes: number;
  featured?: boolean;
  intro: string[];
  sections: ArticleSection[];
  safetyWarnings: string[];
  faqs: ArticleFAQ[];
  references: ArticleReference[];
  relatedSlugs: string[];
}

export interface SeasonalTip {
  season: 'Primavera' | 'Verano' | 'Otoño' | 'Invierno';
  title: string;
  generalAdvice: string;
  speciesToWatch: string[];
  harvestNotes: string;
}

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  advertising: boolean;
  personalization: boolean;
}

export type ConsentStatus = 'pending' | 'accepted' | 'rejected' | 'customized';
