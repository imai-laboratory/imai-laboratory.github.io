export type Language = "ja" | "en";

export type LocalizedText = string | Partial<Record<Language, string>>;

export interface Member {
  name: LocalizedText;
  grade?: LocalizedText;
  email?: string;
  img?: string;
  option?: string;
}

export interface MemberGroup {
  role: LocalizedText;
  members?: Member[];
}

export interface PastMemberGroup {
  year: string | number;
  members?: Array<{ name: LocalizedText; grade?: string }>;
}

export interface YearGroup<T> {
  year: string;
  items: T[];
}

export interface Publication {
  author?: LocalizedText | LocalizedText[];
  title?: LocalizedText;
  book?: LocalizedText;
  vol?: string | number;
  no?: string | number;
  page?: string | number;
  year?: string | number;
  host_city?: LocalizedText;
  host_country?: LocalizedText;
  event_duration?: string;
  presentation_date?: string;
  draft_pdf_url?: string;
  appendix_url?: string;
}

export interface Activity {
  title?: string;
  description?: string;
}

/** Fields used by the publication and activity list views. */
export interface ContentItem {
  author?: LocalizedText | LocalizedText[];
  title?: LocalizedText;
  book?: LocalizedText;
  vol?: string | number;
  no?: string | number;
  page?: string | number;
  year?: string | number;
  host_city?: LocalizedText;
  host_country?: LocalizedText;
  event_duration?: string;
  presentation_date?: string;
  draft_pdf_url?: string;
  appendix_url?: string;
  description?: string;
}
