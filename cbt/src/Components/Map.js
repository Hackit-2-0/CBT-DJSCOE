import ReactMapGl, { Popup, Marker } from "react-map-gl";
import React, { useState, useEffect } from "react";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
  const [selectedPark, setSelectedPark] = useState(null);
  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoidmVkYW5ncGFyYXNuaXMiLCJhIjoiY2s3aWJndjBlMGh5bjNobng4cWtvNXliMCJ9.qeGx1t7VPIUa5TpNuHSgCQ"
        mapStyle="mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      />
    </div>
  );
}
