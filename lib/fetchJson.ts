// 元のJavaScriptコードと同じシンプルな処理に戻す
export const fetchJson = (url: string) => {
  return new Promise((resolve) => {
    fetch(url, { cache: "force-cache" })
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        resolve(json || []);
      })
      .catch(() => {
        // エラーは静かに処理し、空配列を返す
        resolve([]);
      });
  });
};
