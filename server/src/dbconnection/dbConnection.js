import mongoose from "mongoose";
const dbConnection=async (URL)=>{
    try {
        const OPTIONS={
         useNewUrlParser: true,
         useUnifiedTopology: true
        }
        await mongoose.connect(URL,OPTIONS);
        console.log("Connection established");
    } catch (err) {
        console.log(err);
    }
};
export default dbConnection;
