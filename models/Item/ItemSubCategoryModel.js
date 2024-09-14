import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema({
    CategoryName:{type:String,unique:true,trim:true,required:true,maxlength:25},
    CategoryDisc:{type:String,trim:true,required:false,maxlength:90},
    // CategoryMainQuality:{type:Array,required:false, default:[{}]}
});

const ItemSubCategoryModel = mongoose.model("ItemSubCategory", SubCategorySchema)
export default ItemSubCategoryModel; 