const books = require("../model/management")

const jwt = require("jsonwebtoken")

const secret = "Rohan@123"

async function bookData(req,res){

    try {

        jwt.verify(req.token,secret,async (err,data)=>{

            if(err) throw err

        const {title,author,generic} = req.body
            if(err) throw err;

            const checkTitle = books.findOne({title,author,generic}) 
            
            if(!title && !author && !generic){
                return res.status(400).json({msg : "Form is empty !"})
            }else if(!title){
                return res.status(400).json({msg : "Title field is empty !"})
            }else if(!author){
                return res.status(400).json({msg : "Author field is empty !"})
            }else if(!generic){
                return res.status(400).json({msg : "generic field is empty !"})
            }else if(checkTitle){
                 return res.status(400).json({msg : "Data is already exist !"})
            }else{
                const addData = new books({title : title,author : author,generic : generic})
    
                await addData.save()
           
                return res.status(201).json({msg : "Success !",data : addData})
            }
        })
      } catch (error) {
         return res.json("Server error !")
      }

}

 function allBookData(req,res) {
    try {

        jwt.verify(req.token,secret,async (err,data)=>{

        const checkData = await books.find({})
    
        if (!checkData) {
             return res.status(400).json("Data is empty !")
        } else {
            return res.status(201).json({msg : "Success !",data : checkData})
        }
    })
    } catch (error) {
        return res.json("Server error !")
    }

}


function updateData(req,res) {
    try {
        jwt.verify(req.token,secret,async (err,data)=>{
        const id = req.params.id
        const updateData = await books.findByIdAndUpdate(id,req.body)
    
        if (!updateData) {
             return res.status(400).json("Data not updated !")
        } else {
            return res.status(201).json({msg : "Success !",data : updateData})
        }
    })
    } catch (error) {
        return res.json("Server error !")
    }

}


 function deleteData(req,res) {
    try {
        jwt.verify(req.token,secret,async (err,data)=>{
        const id = req.params.id
        const deleteData = await books.findByIdAndDelete(id)
    
        if (!deleteData) {
             return res.status(400).json("Data not updated !")
        } else {
            return res.status(201).json({msg : "Success !",data : deleteData})
        }
    })
    } catch (error) {
        return res.json("Server error !")
    }

}

module.exports = {bookData,allBookData,updateData,deleteData}