import getDataFromApi from "./src/api/data.js";
import express from "express";
import dbConnection from "./src/DbConnection/dbConnection.js";
import getAllData from "./src/api/getGeoJsonData.js";
import cors from "cors" ;
const App = express();
import dotenv from "dotenv";
dotenv.config();
const port=process.env.PORT;
const URL = process.env.MONGODB_URL;
App.use(cors());
dbConnection(URL);
App.use(getAllData);
App.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
});