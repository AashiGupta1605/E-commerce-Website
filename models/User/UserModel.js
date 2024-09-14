import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    UserEID:{type: String, required: [true,"EmailID is Required"], trim: true, unique:true},
    UserPassword:{type: String, required:true, trim: true},
    UserFirstName:{type: String, required:true, trim: true,maxlength:20},
    UserLastName:{type: String, required:true, trim: true,maxlength:20},
    UserMobileNo:{type: Number, required:true, trim: true, unique:true, minlength:10, maxlength:10},
    UserGender:{type: String, required:true, trim: true},
    UserDob:{type: String, required:true, trim: true},
    UserState:{type: String, required:true, trim: true,maxlength:30},
    UserCity:{type: String, required:true, trim: true,maxlength:40},
    UserPincode:{type: String, required:true, trim: true, minlength:6, maxlength:6},
    UserAddress:{type: String, required:false, trim: true,maxlength:60},

    // UserAbout
    UserCulture:{type: String, required:false, trim: true},
    UserStyle:{type: String, required:false, trim: true},
    UserFavColor:{type: String, required:false, trim: true},
    UserChoice:{type: String, required:false, trim: true},
    UserFavModel:{type: String, required:false, trim: true}
});

const UserModel = mongoose.model("UserDetails", UserSchema)
export default UserModel; 