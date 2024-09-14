import AdminModel from "../../models/Admin/AdminModel.js";
import bcryptjs from 'bcryptjs';

const AdminReg = async(req,res) => {
    const {AdminMailID,AdminPassword,AdminRePassword,AdminFirstName,AdminLastName,AdminMobileNo,AdminGender,AdminDob,AdminPincode,AdminDepartment,AdminWork,AdminOrganizationEnrollID,AdminCompany,AdminCurrentLocation,AdminProfilePhoto} =req.body;
    if(AdminMailID&&AdminPassword&&AdminRePassword&&AdminFirstName&&AdminLastName&&AdminMobileNo&&AdminGender&&AdminDob&&AdminPincode&&AdminDepartment&&AdminWork&&AdminOrganizationEnrollID&&AdminCompany){
        const data = await AdminModel.findOne({AdminMailID}) || await AdminModel.findOne({AdminOrganizationEnrollID}) || await AdminModel.findOne({AdminMobileNo}); 
        if(data==null){
            if(AdminPassword.length<8 || AdminPassword.length>15||AdminFirstName.length>20||AdminLastName.length>20||AdminMobileNo.length!==10||AdminPincode.length!==6||AdminDepartment.length>30||AdminWork.length>60||AdminOrganizationEnrollID.length!==10||AdminCompany.length>50||AdminCurrentLocation.length>40)
                res.send({status:"Warn",message:`Filled Details are Inappropriate...`})
            else{
                if(AdminPassword===AdminRePassword){
                    const pswdkey = await bcryptjs.genSalt(12);
                    
                    // req.body.AdminPassword = await bcryptjs.hash(req.body.AdminPassword,pswdkey);//data store only in req.body.AdminPassword not in AdminPassword
                    // console.log("Hashed Password from Reg : ", req.body.AdminPassword)
                    // console.log("Hashed Password from Reg : ", AdminPassword)
                    // AdminPassword = await bcryptjs.hash(AdminPassword,pswdkey) //AdminPassword is const var can't change it's value
                    
                    const bcryptPassword = await bcryptjs.hash(AdminPassword,pswdkey)
                    console.log("Hashed Password from Reg : ", bcryptPassword)
                    const doc = new AdminModel({AdminMailID,AdminPassword:bcryptPassword,AdminFirstName,AdminLastName,AdminMobileNo,AdminGender,AdminDob,AdminPincode,AdminDepartment,AdminWork,AdminOrganizationEnrollID,AdminCompany,AdminCurrentLocation,AdminProfilePhoto})
                    await doc.save();
                    res.send({status:"Success",message:"Admin Registered Successfully...."});
                    // res.status(200).send({status:"Success",message:"Admin Registered Successfully...."});
                }
                else
                res.send({status:"Warn",message:"Enter Re-Password Carefully...."});
                // res.status(422).send({status:"Warn",message:"Enter Re-Password Carefully...."});
            }
        }
        else
        res.send({status:"Warn",message:"Account already Registered by this MobileNumer, E-Mail or Enroll-ID."})
        // res.status(409).send({status:"Warn",message:"This Account already Exists....."})
    }
    else
    res.send({status:"Unsuccess",message:"Data Not Filled...."});
    // res.status(422).send({status:"Unsuccess",message:"Data Not Filled...."});
}

export default AdminReg;