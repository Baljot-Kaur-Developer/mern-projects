import React, { useEffect, useState } from "react";
import './DataVisualization.css';
import axios from "axios";

import L from "leaflet";
import marker from '../resources/images/marker.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function DataVisualization() {
    const[ incidents, setIncidents ] = useState([]);
    const  zoom = 10;
    const markerIcon = new L.Icon({
        iconUrl: marker,
        iconSize: [40, 40],
        iconAnchor: [17, 46], 
        popupAnchor: [0, -46],
      
      });
    const getData = async() => {
        const res1 = await axios.get('http://localhost:5000/getAll');
        // console.log(res1.data.result.objects.output.geometries);
        setIncidents(res1.data.result.objects.output.geometries);
       
        };
useEffect(() => {
getData()
}, []);
return (
    <>
    <MapContainer 
                 center={[-8.55, 115.87]} 
                 zoom={zoom} 
                 style={{ width: '100vw', height: '100vh'}}
              >
                 <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=RZV8pKeyR9fW4ruDFMgl"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {incidents.length > 0 &&
        incidents.map((item) => {
        const position =[item.coordinates[0],item.coordinates[1]];
        return(<Marker
          
        position={position} key={item['properties']['region']}
        icon={markerIcon}>
          <Popup>
        <h3>Lat : '{position[0]}' ,Lng : '{position[1]}'</h3>
      </Popup>
      </Marker>
      )})};
      </MapContainer>

</>
)
};
export default DataVisualization;
