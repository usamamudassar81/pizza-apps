import mongoose from "mongoose";
const MONGO_URL=process.env. MONGO_DB_URI;
if(MONGO_URL){
    throw new Error(
        'please define Mongo DB URI'
    )
}
let cached =global.mongoose
if(!cached){
    cached=global.mongoose={conn:null,Promise:null}
}
async function dbConnect(){
    if(cached.conn){
        return cached.conn
    }
    if(!cached.Promise){
        const opts={
            bufferCommands:false,
        }
        cached.Promise=(await mongoose.connect( MONGO_DB_URI,opts)).then((mongoose)=>{
            return mongoose
        })
    }
    try{
        cached.conn=await cached.Promise
    }catch(e){
        cached.Promise=nullc
    }
    return cached.conn
}
export default dbConnect;