const express = require("express")
const app = express()
const port = 8081 

const multer = require("multer")

const files = multer({
 storage : multer.diskStorage({
    destination : function(req,file,cb){
        return cb(null,"uploads")
    },
    filename : function(req,file,cb){
        return cb(null,`${Date.now()} - ${file.originalName}.jpg`)
    }
})

}).single("file")



app.post('/uploads',files, (req, res) => {
    return res.send("Success !")
})

//routes
const userRoute = require("./routes/user")
const bookRoute = require("./routes/management")
const reviewRoute = require("./routes/review")

// database connectivity
const {connection} = require("./connectivity")

connection("mongodb://127.0.0.1:27017/exam").then(()=>{
    console.log("Mongodb server connected successfully.......")
}).catch((err)=>{
   console.log("Mongodb error",err);
})

// data parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));


app.use("/",userRoute)

app.use("/book",bookRoute)
app.use("/view",reviewRoute)

app.listen(port, () => console.log("Server running on port " + port));