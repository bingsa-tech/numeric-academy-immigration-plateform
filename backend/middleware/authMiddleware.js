const jwt = require("jsonwebtoken")

exports.verifyToken = (req,res,next)=>{

const authHeader = req.headers.authorization

if(!authHeader){

return res.status(403).json({error:"no token"})
}

const token = authHeader.split(" ")[1]

try{

const decoded = jwt.verify(token,process.env.JWT_SECRET)

req.user = decoded

next()

}catch(error){
    console.log("JWT Error Details:", error.message);
return res.status(401).json({error:"invalid token"})
}

}
exports.isAdmin = (req, res, next) => {
    // verifyToken must run BEFORE this so req.user exists
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ error: "Access denied. Admins only." });
    }
};
