import ItemRootCategoryModel from '../../models/Item/ItemRootCategoryModel.js'

const AllDelete = async(req,res) => {
    const data = await ItemRootCategoryModel.find(); 
    if(data==null)
        res.send({status:"Warn",message:"No Root Category Found, Empty Data..."});
    // res.status(404).send({status:"Warn",message:"No Root Category Found, Empty Data..."});
    else{
    await ItemRootCategoryModel.deleteMany();   
    res.send({status:"Success",message:"All Root Categories of Items Deleted Successfully....."});
    // res.status(200).send({status:"Success",message:"All Root Categories of Items Deleted Successfully....."});
    }
}

const DeleteByID = async(req,res) =>{
    const data = await ItemRootCategoryModel.findOne({_id:req.params.id}); 
    if(data==null)
        res.send({status:"Warn",message:`Records of Category- ${req.params.id} are not found.....`});
    // res.status(404).send({status:"Warn",message:`Records of Category- ${req.params.category} are not found.....`});
    else{
    await ItemRootCategoryModel.deleteOne({_id:req.params.id});
    res.send({status:"Success",message:`Category ${data.CategoryName} Deleted Successfully.....`}); 
    // res.status(200).send({status:"Success",message:"Category Deleted Successfully....."});
    }

}

export default {AllDelete, DeleteByID};