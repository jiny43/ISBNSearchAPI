//JSON 데이터 업로드
const URL = `https://www.nl.go.kr/seoji/SearchApi.do?cert_key=1c81199b2a9a2305bc71bb993c45e032794d810adae4c92544bd3d8ac9c2a574&result_style=json&page_no=1&page_size=10&start_publish_date=20220509&end_start_publish=20220509`

// const data = {};

// fetch(URL, {
//   method: 'POST', // 또는 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then((response) => response.json())
// .then((data) => {
//   console.log('성공:', data);
// })
// .catch((error) => {
//   console.error('실패:', error);
// });

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log('성공:', data[0]);
  })
  .catch((error) => {
    console.error('실패:', error);
  });

  //fetch 로 get 요청을 보내고, json형식으로 변환하여 받아옴
