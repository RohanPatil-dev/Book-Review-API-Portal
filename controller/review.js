
const books = require("../model/management")

const jwt = require("jsonwebtoken")

const secret = "Rohan@123"

async function postData(req,res){

    console.log(req.body);

    try {

        jwt.verify(req.token,secret,async(err,data)=>{

        const { content } = req.body;
        const bookId = req.params.id;

        const updatedBook = await books.findByIdAndUpdate(
            bookId,
            { $push: { review: content } },
            { new: true }
        );

        res.json(updatedBook);

        
    })
    } catch (error) {
        res.status(500).json({ message: "Server error !" });
    }

}

module.exports = {postData}