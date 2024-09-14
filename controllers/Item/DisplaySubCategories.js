import ItemSubCategoryModel from '../../models/Item/ItemSubCategoryModel.js'

const getAll = async(req, res) => {
    const data=await ItemSubCategoryModel.find(); 
    if(data==[])
        res.send({status:"Warn",message:"No Category found..."});
    else
    res.send({status:"Success",message:"Recieved Required Data",data});
}

const getByName = async(req, res) => {
    const data=await ItemSubCategoryModel.findOne({CategoryName:req.params.category}); 
    if(data==null)
        res.send({status:"Warn",message:"No Category found..."});
    else
    res.send({status:"Success",message:"Recieved Required Data",data});
}

export default {getAll,getByName}
