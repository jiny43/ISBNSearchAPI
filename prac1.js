    //const ISBNUrl=`https://www.nl.go.kr/NL/search/openApi/search.do?key=1c81199b2a9a2305bc71bb993c45e032794d810adae4c92544bd3d8ac9c2a574&kwd=%ED%86%A0%EC%A7%80`
    //const url = 'https://www.nl.go.kr/seoji/SearchApi.do';   
    // const URL = `https://www.nl.go.kr/seoji/SearchApi.do?cert_key=1c81199b2a9a2305bc71bb993c45e032794d810adae4c92544bd3d8ac9c2a574&result_style=json&page_no=1&page_size=10&start_publish_date=20220509&title=20220509`
    // fetch(URL)
    // .then(Response=> Response.json())
    // .then(data=> console.log(data));
    const URL = `https://www.nl.go.kr/seoji/SearchApi.do?cert_key=1c81199b2a9a2305bc71bb993c45e032794d810adae4c92544bd3d8ac9c2a574&result_style=json&page_no=1&page_size=10&start_publish_date=20220509&end_start_publish=20220509`
    //fetch(URL)
    //.then(Response=> Response.json())
    //.then(data=> console.log(data));
    //json 파일을 가져와서 콘솔에 출력,리소스의 경로를 나타내는 하나의 인수만 받는다. response객체로 표현되며, 직접 json 응답 본문을 받을 수는 없다.
    //response객체 역시 json 응답 본문을 그대로 포함하지 않는다. http응답 전체를 나타내는 객체로, json본문 콘텐츠를 추출하기 위해서는 json()메서드를 호출해야한다.

//----여기까지 data 객체 확인

// POST 메서드 구현 예제
async function postData(url = '', data = {}) {
  // 옵션 기본 값은 *로 강조
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE 등
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
  });
  return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

postData(`https://www.nl.go.kr/seoji/SearchApi.do?cert_key=1c81199b2a9a2305bc71bb993c45e032794d810adae4c92544bd3d8ac9c2a574&result_style=json&page_no=1&page_size=10&start_publish_date=20220509&end_start_publish=20220509`, { answer: 42 }).then((data) => {
  console.log(data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
});

//JSON 데이터 업로드
const data = { username: 'example' };

fetch(url, {
  method: 'POST', // 또는 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
  console.log('성공:', data);
})
.catch((error) => {
  console.error('실패:', error);
});