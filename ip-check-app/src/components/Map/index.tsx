import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export function Map({ location }: { location: any }) {
  return (
    <MapContainer
      center={{ lat: location.lat, lng: location.lng }}
      zoom={15}
      style={{ height: "60vh", width: "100wh", marginTop: "-75px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markerwhatever location={location} />
    </MapContainer>
  );
}

const Markerwhatever = ({ location }: any) => {
  const map = useMap();

  useEffect(() => {
    map.panTo({ lat: location.lat, lng: location.lng });
  }, [location]);

  return (
    <Marker position={{ lat: location.lat, lng: location.lng }}>
      <Popup>
        Location
      </Popup>
    </Marker>
  );
};
