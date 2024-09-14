import ItemDescriptionModel from '../../models/Item/ItemDescriptionModel.js';

const UpdateItem = async(req,res) =>{
    const {title, discription,itemID,itemCount,itemPrice,rootCategory,subCategory,itemDiscount,imgPath} = req.body
    if(title && itemID && itemCount&&itemPrice&&rootCategory&&subCategory&&imgPath){
        const data = await ItemDescriptionModel.findOne({_id:req.params.id}); 
        if(data==null)
            res.send({status:"Warn",message:`Item ${req.params.id} not found.....`});
            // res.status(404).send({status:"Warn",message:"Item not found....."});
        else{
            const existingItemID = await ItemDescriptionModel.findOne({ itemID, _id: { $ne: req.params.id } });
            if(existingItemID){
                res.send({ status: "Warn", message: `ItemID ${itemID} already exists.` });
            }
            else{
                // data=req.body;//ERROR
                data.set({
                    title,
                    discription,
                    itemID,
                    itemCount,
                    itemPrice,
                    rootCategory,
                    subCategory
                });
                await data.save();
                res.send({status:"Success",message:`Item ${itemID} Updated Successfully......`});
                // res.status(200).send({status:"Success",message:"Item Updated Successfully......"});
            }
            
        }
    }
    else
    res.send({status:"Unsuccess",message:"New Data to Update Not Found..."});
    // res.status(400).send({status:"Unsuccess",message:"New Data to Update Not Found..."});
}

export default UpdateItem;
