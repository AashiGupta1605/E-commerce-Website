import ItemRootCategoryModel from '../../models/Item/ItemRootCategoryModel.js'

const getAll = async(req, res) => {
    const data=await ItemRootCategoryModel.find(); 
    if(data==[])
        res.send({status:"Warn",message:"No Category found..."});
    else
    res.send({status:"Success",message:"Recieved Required Data",data});
}

const getByName = async(req, res) => {
    const data=await ItemRootCategoryModel.findOne({CategoryName:req.params.category}); 
    if(data==null)
        res.send({status:"Warn",message:"No Category found..."});
    else
    res.send({status:"Success",message:"Recieved Required Data",data});
}

export default {getAll,getByName}