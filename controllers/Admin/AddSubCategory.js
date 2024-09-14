import ItemSubCategoryModel from "../../models/Item/ItemSubCategoryModel.js";

const AddSubCategory = async(req,res) => {
    const {CategoryName,CategoryDisc} =req.body;
    if(CategoryName){
        const data = await ItemSubCategoryModel.findOne({CategoryName}); 
        if(data==null){
            if(CategoryName.length>25||CategoryDisc>90)
                res.send({status:"Warn",message:`Either Category Name ${CategoryName} or Discription is very large`})
            else{
                const doc = new ItemSubCategoryModel({CategoryName,CategoryDisc})
                await doc.save();
                res.send({status:"Success",message:`New Category ${CategoryName} Added Successfully...`});
                // res.status(200).send({status:"Success",message:"New Category Added Successfully..."});
            }
        }
        else
        res.send({status:"Warn",message:`Category ${CategoryName} Already Exists...`});
        // res.status(409).send({status:"Warn",message:"This Category Already Exists..."});
    }
    else
    res.send({status:"Unsuccess",message:"Enter Category Name..."});
    // res.status(422).send({status:"Unsuccess",message:"Enter Category Name..."});
}

export default AddSubCategory; 