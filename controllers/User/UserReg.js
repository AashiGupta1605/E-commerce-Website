import UserModel from "../../models/User/UserModel.js";
import bcryptjs from 'bcryptjs';

const UserReg = async(req,res) => {
    const {UserEID, UserPassword, UserRePassword,UserFirstName,UserLastName,UserMobileNo,UserGender,UserDob,UserState,UserCity,UserPincode,UserAddress,UserCulture,UserStyle,UserFavColor,UserChoice,UserFavModel} =req.body;
    if(UserEID && UserPassword && UserRePassword && UserFirstName && UserLastName && UserMobileNo && UserGender && UserDob && UserCity && UserState && UserPincode){
        const data = await UserModel.findOne({UserEID}) || await UserModel.findOne({UserMobileNo}); 
        if(data==null){
            if(UserPassword.length<8 || UserPassword.length>15||UserFirstName.length>20||UserLastName.length>20||UserMobileNo.length!==10||UserAddress.length>60||UserPincode.length!==6){
                res.send({status:"Warn",message:`Filled Details are Inappropriate...`})
            }
            else{
                if(UserPassword===UserRePassword){
                    const pswdkey = await bcryptjs.genSalt(12);
                    const bcryptPassword = await bcryptjs.hash(UserPassword,pswdkey)
        
                    const doc = new UserModel({UserEID,UserPassword:bcryptPassword,UserFirstName,UserLastName,UserMobileNo,UserGender,UserDob,UserState,UserCity,UserPincode,UserAddress,UserCulture,UserStyle,UserFavColor,UserChoice,UserFavModel})
                    await doc.save();
                    res.send({status:"Success",message:"User Registered Successfully...."});
                    // res.status(200).send({status:"Success",message:"User Registered Successfully...."});
                }
                else
                res.send({status:"Warn",message:"Enter Re-Password Carefully...."});
                // res.status(422).send({status:"Warn",message:"Enter Re-Password Carefully...."});
            }
        }
        else
        res.send({status:"Warn",message:"This Account already Exists....."})
        // res.status(409).send({status:"Warn",message:"This Account already Exists....."})
    }
    else
    res.send({status:"Unsuccess",message:"Data Not Filled...."});
    // res.status(422).send({status:"Unsuccess",message:"Data Not Filled...."});
}

export default UserReg;