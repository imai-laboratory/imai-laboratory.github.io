import 'whatwg-fetch'; // fetch

export function fetchJson(url) {
  return new Promise((resolve) => {
    fetch(url, {cache: 'no-store'}).then((resp) => {
      return resp.json();
    }).then((json) => {
      resolve(json);
    }).catch((ex) => {
      console.error(ex);
    });
  });
}
