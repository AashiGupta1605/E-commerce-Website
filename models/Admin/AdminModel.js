import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    AdminMailID:{type: String, required: [true,"EmailID is Required"], trim: true,unique:true},
    // AdminPassword:{type: String, required:true, trim: true, minlength:8, maxlength:15}, //Errror due to bcrypt.js
    AdminPassword:{type: String, required:true, trim: true},
    AdminFirstName:{type: String, required:true, trim: true, maxlength:20},
    AdminLastName:{type: String, required:true, trim: true, maxlength:20},
    AdminMobileNo:{type: Number, required:true, trim: true, unique:true, minlength:10, maxlength:10},
    AdminGender:{type: String, required:true, trim: true},
    AdminDob:{type: String, required:true, trim: true},
    AdminPincode:{type: String, required:true, trim: true, minlength:6, maxlength:6},
    AdminDepartment:{type: String, required:true, trim: true, maxlength:30},
    AdminWork:{type: String, required:true, trim: true, maxlength:60},
    AdminOrganizationEnrollID:{type: String, required:true, trim: true, minlength:10, maxlength:10,unique:true},
    AdminCompany:{type: String, required:true, trim: true, maxlength:50},
    AdminCurrentLocation:{type: String, required:false, trim: true, maxlength:40},
    AdminProfilePhoto:{type: String, default:'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='}
});

const AdminModel = mongoose.model("AdminDetails", AdminSchema)
export default AdminModel;