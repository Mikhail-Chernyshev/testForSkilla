const MAIN_API = 'https://api.skilla.ru/mango/getList?date_start=';
// 2023-03-15&date_end=2023-03-17';
const RECORD_API = 'https://api.skilla.ru/mango/getRecord?record=';
export function getData(start, end) {
  return fetch(`${MAIN_API}${start}&date_end=${end}`, {
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
export function getRecord(idRecord, idPartner) {
  return fetch(`${RECORD_API}${idRecord}&partnership_id=${idPartner}`, {
    method: 'POST',
    headers: {
      'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
      'Content-Transfer-Encoding': 'binary',
      'Content-Disposition': `filename = 'record.mp3'`,
      Authorization: 'Bearer testtoken',
    },
  })
    .then((res) => {
      let myBlob = res.blob();
      return new File([myBlob], 'record.mp3', {
        type: myBlob.type,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
