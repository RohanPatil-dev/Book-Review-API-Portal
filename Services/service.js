 const jwt = require("jsonwebtoken")

 const secret = "Rohan@123"

 function setUser(user) {

    const payload = {
        _id : user._id,
        email : user.email
    }

    return jwt.sign(payload,secret)
    
 }

 module.exports = {setUser}