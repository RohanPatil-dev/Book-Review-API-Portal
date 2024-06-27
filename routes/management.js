const express = require('express')

const router = express.Router()

//authorization middleware 
const {authorization} = require("../Middelware/auth")

const {bookData,allBookData,updateData,deleteData} = require("../controller/management")

router.post("/addBooks",authorization,bookData)

router.get("/allBooks",authorization,allBookData)

router.put("/updateBooks/:id",authorization,updateData)

router.delete("/deleteBooks/:id",deleteData)

module.exports = router