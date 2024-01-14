# 미리보기

<div align="center">
<a href="https://wonyoung-portfolio-4c189fd6f075.herokuapp.com/"><img src='/client/src/assets/img/cover.png' alt="pf" width="80%"></a>
 
 _이미지를 클릭하면 사이트로 이동합니다_
</div>

- `Express`와 `Mongoose`를 사용한 서버 사이드 구성
- `React Router`를 이용한 클라이언트 사이드 라우팅
- `React Hooks`를 활용한 상태 관리
- `Three.js`를 이용한 3D 렌더링
- `GSAP와 jQuery`를 사용한 애니메이션 효과

heroku login
heroku git:clone -a wonyoung-portfolio

## 특징
- `React Router`: 사용자 경험을 향상시키기 위해 SPA(Single Page Application) 구조를 채택.
- `GSAP & jQuery,framer-motion`: 동적인 웹사이트를 위한 복잡한 애니메이션 및 상호작용 구현.
- `Three.js`: 3D 요소를 활용하여 독특한 사용자 인터페이스 제공.
- `Express & Mongoose`: RESTful API를 통해 데이터를 관리하고 서버와 클라이언트 간의 통신을 처리.(db 목록 불러오기, db데이터 생성과 수정,삭제)


## 세부사항
- path 기반 게시물 저장 및 검색 기능: 사용자가 글을 작성할 때, 해당 글은 현재 path의 'cate' 카테고리에 자동으로 저장됩니다. 이를 통해 데이터베이스에서 게시물을 효율적으로 검색, 불러오고, 분류할 수 있는 체계를 구축하였습니다.
 ```
    const [postList, setPostList] = useState([]);
    const location = useLocation();

    const loadPosts = () => {
        const path = location.pathname.slice(1);
        axios.post("/api/post/list", { path: path })
            .then((response) => {
                if (response.data.success) {
                    setPostList(response.data.postList.reverse());
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
```

## 설치
### client
```
npm install gsap 
npm install split-type
npm install three
npm install sass
npm install react-router-dom
npm install jquery
npm install axios
npm install moment
npm install react-icons
npm install framer-motion
npm install react-redux   
npm install @reduxjs/toolkit   
```

### server
```
npm init -y;   
npm install express --save;   
npm install nodemon --save;   
npm install path --save;   
npm install mongoose --save;   
```

## 문제해결
<details>
  <summary></summary>
  
- http-proxy-middleware  vite 환경에서는 사용하지않음
vite config파일 수정
```
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5051',
        changeOrigin: true,
        secure: false, // HTTPS 사용 시 true로 설정
      },
    },
  },
});
```
- 히로쿠 배포 오류  
heroku logs -n 200  
몽고디비 화이트리스트  0.0.0.0

- 배포된 히로쿠 앱 파일 받기
```
heroku login  
heroku git:clone -a wonyoung-portfolio  
defaultValue 수정가능value수정불가
```
- 배포 후 오류.
```
package.json 
nodemon index.js -> node index.js

const port = process.env.PORT || 5050;
heroku logs --tail
heroku restart
```
</details>

### note
<details>
- express: Express 웹 프레임워크를 임포트합니다.
- path: 파일 경로를 다루는 유틸리티 모듈입니다.
- mongoose: MongoDB를 위한 ODM(Object Data Mapping)라이브러리입니다.
- Express 애플리케이션 초기화:
 const app = express();: Express 애플리케이션 인스턴스를 생성합니다.
- 서버 설정:
app.use(express.static(path.join(__dirname, "../client/build")));: 클라이언트 측 정적 파일을 서비스합니다.
- app.use(express.json());: JSON 형태의 요청 본문을 파싱합니다.
- app.use(express.urlencoded({ extended: true }));: URL 인코딩된 요청 본문을 파싱합니다.
- MongoDB 연결 설정:

mongoose.connect(config.mongoURI): MongoDB 데이터베이스에 연결합니다. 연결 설정은 config.mongoURI에 저장되어 있습니다.
- 포트 설정 및 서버 시작:
서버는 5050 포트에서 시작됩니다.
MongoDB에 성공적으로 연결되면 콘솔에 메시지를 출력합니다.
- 라우트 설정:
app.get("/")과 app.get("*"): 모든 GET 요청을 클라이언트 측의 index.html로 라우팅합니다. 이는 Single Page Application(SPA)을 위한 일반적인 설정입니다

심플블로그 배포

#히로쿠 배포 오류
heroku logs -n 200
로 보고 gpt 검색 
mongoDB 화이트리스트

heroku login
heroku git:clone -a wnyg-portfolio

defaultValue

package.json 
nodemon index.js -> node index.js

const port = process.env.PORT || 5050;
heroku logs --tail
heroku restart


 - git config --global core.autocrlf true

- http-proxy-middleware  vite 환경에서는 사용하지않음
vite config파일 변경

```
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5051',
        changeOrigin: true,
        secure: false, // HTTPS 사용 시 true로 설정
      },
    },
  },
});
```

npm install aws-sdk@2.348.0 --save;      

1. server index.js 생성
2. package.json start : nodemon index.js 
3. 클라이언트 src에 프록시파일 생성
4. cilent npm run build 
5. 웹 서버 설정

## 라이브러리

- splitType
- moment
- gsap

</details>
