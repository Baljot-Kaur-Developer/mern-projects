import express from "express"; // import express
 // import doctor schema
import geoDataModel from "../schema/geodata.js";
const App = express();
const getAllData = App.get("/getAll", async(req, res) => {
    
    const geometries = await geoDataModel.find({},{ _id:false, __v: false});
    console.log(geometries);
    res.status(200).send({"statusCode": 200,"result": {
        "type": "Topology",
        "objects": {
            "output": {
                "type": "GeometryCollection", geometries}}}});


});
export default getAllData;