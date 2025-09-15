export type LocalizedText = {
  en: string;
  ja: string;
};

export type ResearchArea = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  keywords: string[];
};

export type Language = "en" | "ja";

// Activity系の型定義
export type Activity = {
  title: string;
  description: string;
};

export type ActivityInfo = {
  year: string;
  activity: Activity[];
};

// Publication系の型定義
export type Paper = {
  author?: { [key: string]: string[] | string };
  title?: { [key: string]: string };
  book?: { [key: string]: string };
  vol?: string;
  no?: string;
  page?: string;
  year?: string;
  host_city?: { [key: string]: string };
  host_country?: { [key: string]: string };
  event_duration?: string;
  presentation_date?: string;
  draft_pdf_url?: string;
  appendix_url?: string;
};

export type PaperInfo = {
  year: string;
  paper: Paper[];
};
