import ItemDescriptionModel from '../../models/Item/ItemDescriptionModel.js'

const getAll = async(req, res) => {
    const data=await ItemDescriptionModel.find(); 
    if(data==[])
        res.send({status:"Warn",message:"No Item found..."});
    else
    res.send({status:"Success",message:"Recieved Required Data",data});
}

// const getByName = async(req, res) => {
//     const data=await ItemDescriptionModel.find({title:req.params.item})||await ItemDescriptionModel.find({rootCategory:req.params.item})||await ItemDescriptionModel.find({subCategory:req.params.item})||await ItemDescriptionModel.find({status:req.params.item})||await ItemDescriptionModel.find({itemID:req.params.item})||
//     await ItemDescriptionModel.find({itemPrice:req.params.item}); 
//     if(data==null)
//         res.send({status:"Warn",message:"No Item found..."});
//     else
//     res.send({status:"Success",message:"Recieved Required Data",data});
// }            


const getByName = async(req, res) => {
    const { item, category } = req.params;
    let data={};

    if(item){
        if (!isNaN(parseInt(item))){
            data = await ItemDescriptionModel.find({
                $or: [
                    { title:new RegExp(`^${req.params.item}`, 'i')}, //new RegExp(`${item}`, 'i') makes case insensitive.
                    { status: new RegExp(`${item}`, 'i')},
                    { rootCategory: new RegExp(`${item}`, 'i') },
                    { subCategory: new RegExp(`${item}`, 'i') },
                    { itemID: item },
                    { itemPrice: { $gte: 0, $lte: parseInt(item) }}
                ]
            }); 
        } 
        else{
            data = await ItemDescriptionModel.find({
                $or: [
                    { title:new RegExp(`^${req.params.item}`, 'i')},
                    { status: new RegExp(`${item}`, 'i')},
                    { rootCategory: new RegExp(`${item}`, 'i') },
                    { subCategory: new RegExp(`${item}`, 'i') },
                    { itemID: item },
                    //{ itemPrice: { $gte: 0, $lte: parseInt(item) }} //gives error as item can be anything like it can be title etc, which not convert into int
                ]
            }); 
        }
    }
    if(category){
        data = await ItemDescriptionModel.find({
            $or: [
                { rootCategory: new RegExp(`${category}`, 'i')} 
            ]
        }); 
    }
    if(item && category){
        if(isNaN(parseInt(item))){
            data = await ItemDescriptionModel.find({
                $or: [
                    { title: new RegExp(`^${item}`, 'i'), rootCategory:new RegExp(`${category}`, 'i')},
                    { rootCategory: new RegExp(`${item}`, 'i') },
                    { subCategory: new RegExp(`${item}`, 'i') },
                    { status: new RegExp(`${item}`, 'i'), rootCategory:new RegExp(`${category}`, 'i')},
                    { itemID: item }
                ]
            });
        } 
        else{
            data = await ItemDescriptionModel.find({
                $or: [
                    { title: new RegExp(`^${item}`, 'i'), rootCategory:new RegExp(`${category}`, 'i')},
                    { rootCategory: new RegExp(`${item}`, 'i') },
                    { subCategory: new RegExp(`${item}`, 'i') },
                    { status: new RegExp(`${item}`, 'i'), rootCategory:new RegExp(`${category}`, 'i')},
                    { itemID: item },
                    { itemPrice:{ $gte: 0, $lte: parseInt(item) }, rootCategory:new RegExp(`${category}`, 'i')}
                ]
            });
        }
    }

    if(data==null)
        res.send({status:"Warn",message:"No Item found..."});
    else
    res.send({status:"Success",message:"Recieved Required Data",data});
}

export default {getAll,getByName}