import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";


export function Map() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={15}  style={{ height: '60vh', width: '100wh', marginTop: '-75px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
            . <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
