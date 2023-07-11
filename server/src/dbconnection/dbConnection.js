import mongoose from "mongoose";
const dbConnection=async ()=>{
    try {
        const OPTIONS={
         useNewUrlParser: true,
         useUnifiedTopology: true
        }
        await mongoose.connect('mongodb://0.0.0.0:27017/cdldb',OPTIONS);
        console.log("Connection established");
    } catch (err) {
        console.log(err);
    }
};
export default dbConnection;
