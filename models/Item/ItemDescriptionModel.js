import mongoose from "mongoose";

const ItemDescSchema = new mongoose.Schema({
    itemID:{type:String, required:[true,"Item ID is Required"], trim: true, unique:true,maxlength:10},
    title:{type: String, required: [true,"Title is Required"], trim: true,minlength:6,maxlength:25},
    itemCount:{type: Number, required:[true,"Number of Available Items Required"], trim: true},
    discription:{type: String, default:null, trim: true,maxlength:150},
    itemPrice:{type:Number,required:[true,"Price of Item is Required"],trim:true,minlength:2},
    itemDiscount:{type:Number,default:null,min:0, max:95},
    rootCategory:{type:String,required:[true,"Root Category Name is Required"],trim:true, maxlength:25},
    subCategory:{type:String,required:[true,"Sub Category Name is Required"],trim:true,maxlength:25},
    imgPath:{type:String,required:[true,"Image is Required"]},
    status:{type:String,default:"Available",required:true,trim:true},
    // itemEntryDate:{type:Date}
});

const ItemDescriptionModel = mongoose.model("Item_Description", ItemDescSchema)
export default ItemDescriptionModel;
