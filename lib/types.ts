export type LocalizedText = {
  en: string;
  ja: string;
};

export type SiteConfig = {
  site: {
    title: LocalizedText;
    description: LocalizedText;
  };
  navigation: {
    [key: string]: LocalizedText;
  };
};

export type ResearchArea = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  keywords: string[];
};

export type Member = {
  id: string;
  name: LocalizedText;
  role: LocalizedText;
  email?: string;
  research_interests?: string[];
};

export type Language = "en" | "ja";

export type AppState = {
  language: Language;
  siteConfig: SiteConfig | null;
  researchAreas: ResearchArea[];
  members: Member[];
};

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

// Member系の型定義（既存のMemberと重複を避けるためプレフィックス追加）
export type MemberData = {
  name: { [key: string]: string };
  grade: { [key: string]: string };
  email: string;
  option?: string;
  img: string;
};

export type MemberGroupInfo = {
  role: { [key: string]: string };
  members: MemberData[];
};

export type PastMember = {
  name: { [key: string]: string };
  grade: string;
};

export type PastMemberInfo = {
  year: string;
  members: PastMember[];
};
