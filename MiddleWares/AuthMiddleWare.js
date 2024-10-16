

// responde: Servidor => Cliente (Status /json)
// Request : cliente => Servidor  ( Params/ query/ body / headers)

const HttpCodes = require("../const/HttpCodes");

//decode token
//verify token
//


const AuthMiddleware = ( req, res ,next) => {
    const token = req.headers.authorization;
    
    if(token){
        return res.status(HttpCodes.UNAUTHORIZED).json({
            data : null,
            error: true,
            Message: " Token not found"
        });
    } else {
        next ();
    }
};

module.exports=AuthMiddleware;