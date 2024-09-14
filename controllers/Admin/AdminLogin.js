import AdminModel from "../../models/Admin/AdminModel.js";
import jwt from "jsonwebtoken";
import bcryptjs from 'bcryptjs';

const AdminLogin = async(req,res)=>{
    const { AdminMailID, AdminPassword } = req.body;
    if (AdminMailID && AdminPassword){
        const data = await AdminModel.findOne({AdminMailID}); 
        if(data!=null){
            const chkPswd=await bcryptjs.compare(AdminPassword,data.AdminPassword)
            console.log(chkPswd)
            if(AdminMailID===data.AdminMailID && chkPswd){
                const token = jwt.sign({AdminMailID:data.AdminMailID, AdminPassword:data.AdminPassword}, process.env.jwtSecretKey,{expiresIn:"1d"});
                // console.log(token);
                const user=AdminMailID.split("@")[0]
                res.send({status:"Success",message:`${user} Login Successfully.......`,token});
                // res.status(200).send({status:"Success",message:"Login Successfully.......",token});
            }
            else
            res.send({status:"Warn",message:"Incorrect ID/Password.....Re-enter Properly...."});
            // res.status(401).send({status:"Warn",message:"Incorrect ID/Password.....Re-enter Properly...."});
        }
        else
        res.send({status:"Unsuccess",message:"You are not Registered, register first....."});
        // res.status(404).send({status:"Unsuccess",message:"You are not Registered, register first....."});
    }
    else
    res.send({status:"Unsuccess",message:"Incomplete Data...."});
    // res.status(422).send({status:"Unsuccess",message:"Incomplete Data...."});
}

export default AdminLogin;