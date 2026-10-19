/** Languages supported by the site. */
export type Language = "ja" | "en";

/** A value that can be shared by the Japanese and English views. */
export type LocalizedText = string | Partial<Record<Language, string>>;

/** A current member returned by members_data. */
export interface Member {
  name: LocalizedText;
  grade?: LocalizedText;
  email?: string;
  img?: string;
  option?: string;
}

/** A group of current members, such as professors or students. */
export interface MemberGroup {
  role: LocalizedText;
  members?: Member[];
}

/** A group of former members organized by year. */
export interface PastMemberGroup {
  year: string | number;
  members?: Array<{ name: LocalizedText; grade?: string }>;
}

/** A remote content list grouped by year. */
export interface YearGroup<T> {
  year: string;
  items: T[];
}

/** Publication fields used by publications_data. */
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

/** Activity fields used by activities_data. */
export interface Activity {
  title?: string;
  description?: string;
}

/** Combined view model used by the publication and activity list views. */
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
