import ItemRootCategoryModel from '../../models/Item/ItemRootCategoryModel.js'

const UpdateRootCategory = async(req,res) =>{
    if(req.body.CategoryName){
        const data = await ItemRootCategoryModel.findOne({_id:req.params.id}); 
        if(data==null)
            res.send({status:"Warn",message:`Category ${req.params.id} not found.....`});
        // res.status(404).send({status:"Warn",message:"Category not found....."});
        else{
            const existingCategory = await ItemRootCategoryModel.findOne({ CategoryName: req.body.CategoryName, _id: { $ne: req.params.id } });
            if(existingCategory){
                res.send({ status: "Warn", message: `Category ${req.body.CategoryName} already exists.` });
            }
            else{
                const category=data.CategoryName;
                // data=req.body;
                data.set({CategoryName:req.body.CategoryName,CategoryDisc:req.body.CategoryDisc})
                await data.save();
                res.send({status:"Success",message:`Category ${category} Updated Successfully......`});
                // res.status(200).send({status:"Success",message:"Category Updated Successfully......"});
            }
        }
    }
    else
    res.send({status:"Unsuccess",message:"Empty Category, New Category to Update Not Found..."});
    // res.status(400).send({status:"Unsuccess",message:"Empty Category, New Category to Update Not Found..."});
}

export default UpdateRootCategory;
