import { texts } from "../state";

/** 翻訳キーから現在の言語の表示文言を取得する。 */
export const useTranslation = () => {
  const t = (key: string): string => texts.value[key] ?? key;

  return {
    t,
  };
};
