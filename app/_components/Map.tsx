"use client";
import { useState } from "react";
import MapGl, { Marker, Popup } from "react-map-gl";
import { ListingCard, SearchResultData } from "../types/app";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
function Map({ searchResultData }: { searchResultData: SearchResultData }) {
  const coordinates = searchResultData.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));
  console.log(coordinates);
  const center = getCenter(coordinates) as {
    latitude: number;
    longitude: number;
  };
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    zoom: 11,
    latitude: center.latitude,
    longitude: center.longitude,
  });

  const [selectedLocation, setSelectedLocation] = useState<ListingCard | null>(
    null
  );
  return (
    <MapGl
      {...viewport}
      mapStyle="mapbox://styles/mapbox/navigation-night-v1"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      onMove={(viewport) =>
        setViewport((prev) => ({
          ...prev,
          longitude: viewport.viewState.longitude,
          latitude: viewport.viewState.latitude,
        }))
      }
    >
      {searchResultData.map((item) => (
        <div key={item.title}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offset={[-20, -10]}
            onClick={() => setSelectedLocation(item)}
          >
            <p
              role="img"
              aria-label="push-pin"
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>
          {selectedLocation?.long === item.long && (
            <Popup
              longitude={item.long}
              latitude={item.lat}
              onClose={() => setSelectedLocation(null)}
              closeOnClick={false}
            >
              <div className="text-sm">
                <p className="font-semibold">{item.title}</p>
                <p>{item.price}</p>
              </div>
            </Popup>
          )}
        </div>
      ))}
    </MapGl>
  );
}

export default Map;
