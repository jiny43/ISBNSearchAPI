const http = require('http');

const server = http.createServer((req, res) => {
  const URL = 'http://www.nl.go.kr/seoji/SearchApi.do?cert_key=1c81199b2a9a2305bc71bb993c45e032794d810adae4c92544bd3d8ac9c2a574&result_style=json&page_no=1&page_size=10&start_publish_date=20220509&end_start_publish=20220509';

  //api에 get요청
  http.get(URL, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
      console.log(data);
    });

    response.on('end', () => {
      // res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
      
    });
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`서버 생성`);
});
