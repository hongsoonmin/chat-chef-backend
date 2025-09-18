import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

// 프론트엔드에서 받은 json형태의 데이터를 자바스크립트 객체로 파싱(변환)하여 사용  

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// 테스트용 API
app.get("/test", async (req, res) => {
  try {
    res.json({ data: "Chutzrit" });
  } catch (error) {
    console.log(error);
  }
});

// 테스트용 API
// req: 프론트 -> 백엔드 [요청]
// res : 백엔드 -> 프론트 [응답]
app.get("/", (req, res) => {
 // 이 API가 혼출됐을때 실행할 로직
// try-catch 구문 : 예외(에러)처리
try{
 // 프론트엔드에게 응답
res.json({ data : "Chutzrit"});
} catch(error){
  // 예외 발생 시 처리할 코드
  console.log(error)
}
})




app.listen("8080", () => {
  console.log("서버 온")
});


