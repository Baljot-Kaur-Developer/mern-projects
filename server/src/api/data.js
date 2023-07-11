import fetch from "node-fetch";
import geoDataModel from "../schema/geodata.js";
async function getDataFromApi() {
const getData = await fetch('https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json');
const jsonData = await getData.json();
const enteries = jsonData.Infogempa.gempa;
console.log(enteries.length);

for(let i = 0; i < enteries.length; i++) {
const data =   enteries[i]['Coordinates'];

    var array = data.split(',');
var b = parseFloat(array[0]);
var c = parseFloat(array[1]);
const documents = new geoDataModel ({  
coordinates : [b,c],
properties :{
datetime : enteries[i]['DateTime'],
region : enteries[i]['Wilayah'],
magnitude : enteries[i]['Magnitude'],
latitude :enteries[i]['Lintang'],
longitude :enteries[i]['Bujur'],
}
})
const dataSaved = await documents.save();
console.log("dataSaved"+dataSaved);
}
};
export default getDataFromApi;