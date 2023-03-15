const MAIN_API =
  'https://api.skilla.ru/mango/getList?date_start=2022-12-01&date_end=2022-12-31';

export function getData() {
  return fetch(MAIN_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      //   accept: '*/*',
      Authorization: 'Bearer testtoken',
    },
  }).then((response) => {
    return response.json();
  });
}
