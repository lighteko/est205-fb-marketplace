import React, { useState } from "react";

const LocationPage: React.FC = () => {
  const [location, setLocation] = useState<string>("San Francisco");
  const [acceptedDistance, setAcceptedDistance] = useState<number>(40);
  const [mapPosition, setMapPosition] = useState<{ lat: number; lon: number }>({
    lat: 37.7749,
    lon: -122.4194,
  });

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredLocation = e.target.value;
    setLocation(enteredLocation);

    if (enteredLocation.toLowerCase() === "san francisco") {
      setMapPosition({ lat: 37.7749, lon: -122.4194 });
    } else if (enteredLocation.toLowerCase() === "new york") {
      setMapPosition({ lat: 40.7128, lon: -74.006 });
    } else if (enteredLocation.toLowerCase() === "11024") {
        setMapPosition({ lat: 40.9041, lon: -73.1238 })
    }
        else {
      setMapPosition({ lat: 37.7749, lon: -122.4194 });
    }
  };

  const handleDistanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAcceptedDistance(Number(e.target.value));
  };

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${mapPosition.lon - 0.1},${mapPosition.lat - 0.1},${mapPosition.lon + 0.1},${mapPosition.lat + 0.1}&layer=mapnik&marker=${mapPosition.lat},${mapPosition.lon}`;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>My Location</h2>
      <div style={{ marginBottom: "15px" }}>
        <label>Type your Location: State, City, Zip Code</label>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          style={{
            display: "block",
            width: "90%",
            padding: "10px",
            margin: "10px 0",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Accepted Distance</label>
        <select
          value={acceptedDistance}
          onChange={handleDistanceChange}
          style={{
            display: "block",
            width: "97%",
            padding: "10px",
            fontSize: "15px",
          }}
        >
          <option value={10}>10 Miles</option>
          <option value={20}>20 Miles</option>
          <option value={40}>40 Miles</option>
          <option value={60}>60 Miles</option>
        </select>
      </div>
      <div
        style={{
          height: "400px",
          width: "100%",
          marginBottom: "15px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <iframe
          title="Map"
          src={mapSrc}
          style={{ border: "none", width: "100%", height: "100%" }}
          allowFullScreen
        ></iframe>
      </div>
      <button
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default LocationPage;
