import getDataFromApi from "./src/api/data.js";
import express from "express";
import dbConnection from "./src/DbConnection/dbConnection.js";
import getAllData from "./src/api/getGeoJsonData.js";
import cors from "cors" ;
dotenv.config();
const App = express();
import dotenv from "dotenv";
const port=process.env.PORT || 8001;
App.use(cors());
dbConnection();
getDataFromApi();
App.use(getAllData);
App.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
});