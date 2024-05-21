import mongoose,{connection} from "mongoose";

export const connectDB = async () => {

try{
    // const {connection}=await mongoose.connect(process.env.MONGO_URI,{
    //     dbName:"workdb"
        
    // });
    // MONGO_URL = mongodb+srv://sadiawaqas:sadia876*...@twitterbysadiadb.p2esygw.mongodb.net/twitterdb?retryWrites=true&w=majority&appName=twitterBySadiadb
    const {connection}=await mongoose.connect(process.env.MONGO_URI);
    
    console.log("connected");
    console.log("connecteded");

    
}catch(error){
    console.log("not connected");

    console.log("not connected",error);

}


};