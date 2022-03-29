import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export function Map({ location }: { location: any }) {
  return (
    <MapContainer
      center={{ lat: location?.lat || 0, lng: location?.lng || 0 }}
      zoom={15}
      className="responsive-map"
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
    map?.panTo({ lat: location?.lat || 0, lng: location?.lng || 0 });
  }, [location]);

  return (
    <Marker position={{ lat: location?.lat || 0, lng: location?.lng || 0 }}>
      <Popup>Location</Popup>
    </Marker>
  );
};
