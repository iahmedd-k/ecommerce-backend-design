import mongoose from "mongoose";

const connectDb = async () => {

    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Connected To dataabse successfully!")
        }).catch((err)=>{
            
            console.log(`Error while connecting ${err}`)

        })

}

export default connectDb;