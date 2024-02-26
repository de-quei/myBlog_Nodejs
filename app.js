require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const connectDb = require("./config/db");

const app = express();
const port = process.env.PORT || 3000; // env가 설정되어있지 않으면 3000을 기본으로 지정한다.

connectDb();

app.set("view engine", "ejs"); // view engine으로 ejs 사용
app.use(expressLayouts); // expressLayout 사용
app.set("views", "./views"); // 템플릿 파일은 views 폴더에 저장

app.use(express.static("public")); // 정적 파일 설정

// routes 디렉토리 하위에 라우터를 만들고 엔트리 포인트에서 use로 등록해주어야 함. 
app.use("/", require("./routes/main"));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})