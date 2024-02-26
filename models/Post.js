const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now() 
    }
})

// 모델링
module.exports = mongoose.model("Post", PostSchema);