import ItemSubCategoryModel from '../../models/Item/ItemSubCategoryModel.js'

const AllDelete = async(req,res) => {
    const data = await ItemSubCategoryModel.find(); 
    if(data==null)
        res.send({status:"Warn",message:"No Sub-Category Found, Empty Data..."});
    // res.status(404).send({status:"Warn",message:"No Sub-Category Found, Empty Data..."});
    else{
    await ItemSubCategoryModel.deleteMany();   
    res.send({status:"Success",message:"All Sub Categories Deleted Successfully....."});
    // res.status(200).send({status:"Success",message:"All Sub Categories Deleted Successfully....."});
    }
}

const DeleteByID = async(req,res) =>{
    const data = await ItemSubCategoryModel.findOne({_id:req.params.id}); 
    if(data==null)
        res.send({status:"Warn",message:`Record of ${req.params.id} Category not found.....`});
    // res.status(404).send({status:"Warn",message:`Record of ${req.params.category} Category not found.....`});
    else{
    await ItemSubCategoryModel.deleteOne({_id:req.params.id}); 
    res.send({status:"Success",message:`Category ${data.CategoryName} Deleted Successfully.....`});
    // res.status(200).send({status:"Success",message:"Category Deleted Successfully....."});
    }

}

export default {AllDelete, DeleteByID};