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
        resolve([]);
      });
  });
};
