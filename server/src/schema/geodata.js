import mongoose from "mongoose";
const geoDataSchema=new mongoose.Schema({
    type: {
        type: String,
        default : "Point"
    },
    coordinates:
    {type: [Number],
    },
    properties:{
        datetime : {type: Date},
region : {type : String},
magnitude : {type : String},
latitude :{type : String},
longitude :{type : String},

    },
});
const geoDataModel=mongoose.model("maps",geoDataSchema);
export default geoDataModel;