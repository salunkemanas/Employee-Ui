const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config"); // {  } This is called as destructuring 
 
// The token we got we have to verify from that
function adminMiddleware(req,res,next){   //admin authentication logic
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1]
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if (decodedValue.username){
        next();
    } else{
        res.status(403).json({
            message:"You are not authenticated"
        })
    };
}

module.exports = adminMiddleware;