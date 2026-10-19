import { localized } from "./localization";
import type { ContentItem, Language, LocalizedText, YearGroup } from "../types/content";

/** 論文データの著者名を表示用の文字列に整形する。 */
export function formatAuthor(
  value: LocalizedText | LocalizedText[] | undefined,
  language: Language,
): string {
  const result = localized(value, language);
  const authors = Array.isArray(result) ? result : result ? [result] : [];

  return authors.map((author) => author.replace(/_/g, " ")).join(", ");
}

/** 年別データに含まれるレコード数を合計する。 */
export function countYearItems(groups: YearGroup<ContentItem>[]): number {
  return groups.reduce((total, group) => total + (group.items?.length ?? 0), 0);
}

/** 論文一覧に表示する逆順の番号を計算する。 */
export function publicationNumber(
  groups: YearGroup<ContentItem>[],
  yearIndex: number,
  itemIndex: number,
): number {
  const total = countYearItems(groups);
  const previous = countYearItems(groups.slice(0, yearIndex));

  return total - previous - itemIndex;
}

const PAST_GRADE_KEYS: Record<string, string> = {
  d: "members_past_grade_doctor",
  m: "members_past_grade_master",
  b: "members_past_grade_bachelor",
};

/** 過去メンバーデータの学年コードを翻訳する。 */
export function formatPastGrade(grade: string, translate: (key: string) => string): string {
  const translationKey = PAST_GRADE_KEYS[grade];
  return translationKey ? translate(translationKey) : grade;
}
