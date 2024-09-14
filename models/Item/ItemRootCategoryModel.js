import mongoose from "mongoose";

const RootCategorySchema = new mongoose.Schema({
    CategoryName:{type:String,unique:true,trim:true,required:true,maxlength:25},
    CategoryDisc:{type:String,trim:true,required:false,maxlength:90}
    
});

const ItemRootCategoryModel = mongoose.model("ItemRootCategory", RootCategorySchema)
export default ItemRootCategoryModel;