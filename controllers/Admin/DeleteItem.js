import ItemDescriptionModel from '../../models/Item/ItemDescriptionModel.js'

const AllDelete = async(req,res) => {
    const data = await ItemDescriptionModel.find(); 
    if(data==null)
        res.send({status:"Warn",message:"No Item Found, Empty Data"});
    // res.status(404).send({status:"Warn",message:"No Item Found, Empty Data"});
    else{
    await ItemDescriptionModel.deleteMany();   
    res.send({status:"Success",message:"All Items Deleted Successfully....."});
    // res.status(200).send({status:"Success",message:"All Items Deleted Successfully....."});
    }
}

const DeleteByID = async(req,res) =>{
    const data = await ItemDescriptionModel.findOne({_id:req.params.id}); 
    if(data==null)
        res.send({status:"Warn",message:`Records of Item ID-${req.params.id} not found.....`});
    // res.status(404).send({status:"Warn",message:`Records of Item ID-${req.params.id} not found.....`});
    else{
    await ItemDescriptionModel.deleteOne({_id:req.params.id}); 
    res.send({status:"Success",message:`Item ${data.title} Deleted Successfully.....`});
    // res.status(200).send({status:"Success",message:"Item Deleted Successfully....."});
    }

}

export default {AllDelete, DeleteByID};