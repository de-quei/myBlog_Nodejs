const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

// /home 요청 시, index.ejs를 호출
// ["/", "/home"] - 두 경우 모두 index.ejs를 호출
router.get(["/", "/home"], asyncHandler( async (req, res) => {
        const locals = {
            title: "Home"
        }
        const data = await Post.find();
        res.render("index", { locals, data, layout: mainLayout }); // ejs를 위해서 render 해주어야 함.
    })
);

// /about 요청 시, about.ejs를 호출
router.get("/about", (req, res) => {
    const locals = {
        title: "About"
    }
    res.render("about", { locals, layout: mainLayout });
})

// 게시물 상세보기 GET /post/:id
router.get("/post/:id", asyncHandler( async (req, res) => {
        const data = await Post.findOne({ _id: req.params.id }); 
        res.render("post", { data, layout: mainLayout }); // post.ejs로 렌더링
    })
)

module.exports = router;

// Post.insertMany( [
//     {
//         title: "제목 1",
//         body: "내용 1 - Lorem ipsum dolor, sit amet consectetur adipisicing elig."
//     },
//     {
//         title: "제목 2",
//         body: "내용 2 - Lorem ipsum dolor, sit amet consectetur adipisicing elig."
//     },
//     {
//         title: "제목 3",
//         body: "내용 3 - Lorem ipsum dolor, sit amet consectetur adipisicing elig."
//     },
//     {
//         title: "제목 4",
//         body: "내용 4 - Lorem ipsum dolor, sit amet consectetur adipisicing elig."
//     },
//     {
//         title: "제목 5",
//         body: "내용 5 - Lorem ipsum dolor, sit amet consectetur adipisicing elig."
//     }
// ]);