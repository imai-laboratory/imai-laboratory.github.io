import { texts } from "../state";

/** 翻訳キーから現在の言語の表示文言を取得する。 */
export function useTranslation() {
  function t(key: string): string {
    return texts.value[key] ?? key;
  }

  return {
    t,
  };
}
