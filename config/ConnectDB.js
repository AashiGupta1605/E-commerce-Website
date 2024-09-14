import mongoose from "mongoose";
const ConnectDB = async()=>{
    try{
        const DB_Options={
            dbName:"Online_Shopping_PortalDB"
        };
        await mongoose.connect(process.env.Database_URL,DB_Options);
        console.log("Connection connected...");
    }
    catch(err){
        console.log(err);
    }
};
export default ConnectDB;