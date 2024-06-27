
const User = require("../model/user")

const {setUser} = require("../Services/service")

async function registerData(req,res) {
      try {
        const {name,email,password} = req.body

        if(!name && !email && !password){
            return res.status(400).json({msg : "Form is empty !"})
        }else if(!name){
            return res.status(400).json({msg : "Name field is empty !"})
        }else if(!email){
            return res.status(400).json({msg : "Email field is empty !"})
        }else if(!password){
            return res.status(400).json({msg : "Password field is empty !"})
        }else{
            const addData = new User({name : name,email : email,password : password})

            await addData.save()
       
            return res.status(200).json({msg : "User registered successfully !",data : addData})
        }
      } catch (error) {
         return res.status(400).json("Server error !")
      }
}

async function loginData(req,res) {

    try {
        const {email,password} = req.body

        const checkData = await User.findOne({email,password})
    
        if (!checkData) {
             return res.status(400).json("Email and Password doesn't exist !")
        } else {
           const token = setUser(checkData)
            return res.status(201).json({msg : "Success !",data : checkData,token : token })
        }

       
    } catch (error) {
        return res.json("Server error !")
    }


}

module.exports = {registerData,loginData}