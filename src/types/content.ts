/** サイトで対応する言語。 */
export type Language = "ja" | "en";

/** 日本語・英語で共通して使う値。 */
export type LocalizedText = string | Partial<Record<Language, string>>;

/** members_dataから取得する在籍メンバー。 */
export interface Member {
  name: LocalizedText;
  grade?: LocalizedText;
  email?: string;
  img?: string;
  option?: string;
}

/** 教員・学生などの在籍メンバーグループ。 */
export interface MemberGroup {
  role: LocalizedText;
  members?: Member[];
}

/** 年別にまとめた過去メンバー。 */
export interface PastMemberGroup {
  year: string | number;
  members?: Array<{ name: LocalizedText; grade?: string }>;
}

/** 年別にまとめた外部コンテンツ。 */
export interface YearGroup<T> {
  year: string;
  items: T[];
}

/** publications_dataで使う論文項目。 */
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

/** activities_dataで使う活動項目。 */
export interface Activity {
  title?: string;
  description?: string;
}

/** 論文・活動一覧の表示で共通して扱う項目。 */
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
