import ItemSubCategoryModel from "../../models/Item/ItemSubCategoryModel.js";

const UpdateSubCategory = async(req,res) =>{
    if(req.body.CategoryName){
        const data = await ItemSubCategoryModel.findOne({_id:req.params.id}); 
        if(data==null)
            res.send({status:"Warn",message:`Category ${req.params.id} not found.....`});
            // res.status(404).send({status:"Warn",message:"Category not found....."});
            else{
                const existingCategory = await ItemSubCategoryModel.findOne({ CategoryName: req.body.CategoryName, _id: { $ne: req.params.id } });
                if(existingCategory){
                    res.send({ status: "Warn", message: `Category ${req.body.CategoryName} already exists.` });
                }
                else{
                    const category=data.CategoryName;
                    data.set({CategoryName:req.body.CategoryName,CategoryDisc:req.body.CategoryDisc});
                    await data.save();
                    res.send({status:"Success",message:`Category ${category} Updated Successfully......`});
                    // res.status(200).send({status:"Success",message:"Category Updated Successfully......"});
                }
            }
    }
    else
    res.send({status:"Unsuccess",message:"Empty Category Name, New Category to Update Not Found..."});
    // res.status(400).send({status:"Unsuccess",message:"Empty Category Name, New Category to Update Not Found..."});
}

export default UpdateSubCategory;