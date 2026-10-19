import { localized } from "./localization";
import type { ContentItem, Language, LocalizedText, YearGroup } from "../types/content";

/** Format the author value returned by the publication data source. */
export function formatAuthor(
  value: LocalizedText | LocalizedText[] | undefined,
  language: Language,
): string {
  const result = localized(value, language);
  const authors = Array.isArray(result) ? result : result ? [result] : [];

  return authors.map((author) => author.replace(/_/g, " ")).join(", ");
}

/** Count all records in a year-grouped remote content response. */
export function countYearItems(groups: YearGroup<ContentItem>[]): number {
  return groups.reduce((total, group) => total + (group.items?.length ?? 0), 0);
}

/** Calculate the reverse-chronological number displayed for a publication. */
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

/** Translate the grade codes used by the legacy member data source. */
export function formatPastGrade(grade: string, translate: (key: string) => string): string {
  const translationKey = PAST_GRADE_KEYS[grade];
  return translationKey ? translate(translationKey) : grade;
}
