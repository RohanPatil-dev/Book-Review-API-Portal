const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    content:{
        type:String
    }
});

const bookSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true,
    },
    generic : {
        type : String,
        required : true
    },
    review: [commentSchema]
});


const bookModel = mongoose.model('book', bookSchema );

module.exports = bookModel