/**
 * 多言語対応オブジェクトから指定言語のテキストを取得する
 * 指定言語が存在しない場合は、最初に見つかった値を返す
 *
 * @param elem 多言語対応オブジェクト (例: {"ja": "日本語", "en": "English"})
 * @param lang 取得したい言語コード (例: "ja", "en")
 * @returns 指定言語のテキスト、または最初に見つかった値
 */
export const getLangText = (
  elem: Record<string, string> | null | undefined,
  lang: string,
): string => {
  if (!elem) return "";
  const text = elem[lang];
  if (text !== undefined) {
    return text;
  }
  const arr = Object.values(elem);
  if (arr.length === 0) {
    return "";
  }
  return arr[0] as string;
};
