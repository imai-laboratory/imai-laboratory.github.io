import type { Language, LocalizedText } from "../types/content";

export function localized(
  value: LocalizedText | LocalizedText[] | null | undefined,
  language: Language,
): string | string[] {
  if (value == null) return "";
  if (Array.isArray(value))
    return value.map((item) => localized(item, language)).flat() as string[];
  if (typeof value === "string") return value;
  return value[language] ?? value.ja ?? value.en ?? "";
}

export function localizedString(
  value: LocalizedText | null | undefined,
  language: Language,
): string {
  const result = localized(value, language);
  return Array.isArray(result) ? result.join(", ") : result;
}
