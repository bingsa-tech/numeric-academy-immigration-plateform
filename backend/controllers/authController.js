const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userModel = require("../models/userModel")

exports.register = async (req,res)=>{

try{

const {email,password} = req.body

const hashedPassword = await bcrypt.hash(password,10)

await userModel.createUser(email,hashedPassword)

res.json({message:"User created"})

}catch(error){

console.error(error)
res.status(500).json({error:"registration failed"})

}

}


exports.login = async (req,res)=>{

try{

const {email,password} = req.body

const result = await userModel.findUserByEmail(email)

if(result.rows.length === 0){

return res.status(401).json({error:"user not found"})
}

const user = result.rows[0]

const validPassword = await bcrypt.compare(password,user.password_hash)

if(!validPassword){

return res.status(401).json({error:"invalid password"})
}

const token = jwt.sign(

{ id:user.id, email:user.email, role: user.role },

process.env.JWT_SECRET,

{ expiresIn:"1h" }

)

res.json({token})

}catch(error){

console.error(error)
res.status(500).json({error:"login failed"})

}

}