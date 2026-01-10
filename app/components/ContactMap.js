"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export default function ContactMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const defaultPosition = { lat: 11.3905109, lng: 124.8844867 }; // Your location

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div
      style={{
        width: "100%",       // Full width of parent container
        aspectRatio: "1 / 1", // Makes it square; adjust ratio if needed
        maxWidth: "800px",   // Optional: max width for large screens
        margin: "0 auto",    // Center horizontally
      }}
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={defaultPosition}
        zoom={15}
      >
        <Marker position={defaultPosition} />
      </GoogleMap>
    </div>
  );
}
