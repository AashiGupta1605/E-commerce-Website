import jwt from 'jsonwebtoken';
// const jwtkey='secret key'

const TokenVarification=(req,res,next )=>{
    const Token=req.headers["authorization"].split(" ")[1];
        if(Token){
            // console.log("Token for verification : ",AdminToken)
            // console.log("Secret Key : ",process.env.jwtAdminSecretKey)
            
            jwt.verify(Token,process.env.jwtSecretKey,(err,valid)=>{
                if(err){
                    // res.status(401).send("Enter Valid Token")
                    res.send("Enter Valid Token")
                }
                else{
                    next()
                }
            })
        }
        else{
            // res.status(403).send("Token not found");
            res.send("Token not found");
        }
}

export default TokenVarification;