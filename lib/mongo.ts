import mongoose from "mongoose";

export default async function dbConnection(){
    try {
        const connect = await mongoose.connect("mongodb+srv://naimalAuth:MongoDB@mycluster01.kj79t.mongodb.net/UserDB")
        
        if (!connect) {
            throw new Error("Please define the MONGODB_URI environment variable");
          }else  return connect
    } catch (error:unknown) {
        if(error instanceof Error){
        return error.message
        }
    }
}