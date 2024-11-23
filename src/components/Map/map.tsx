'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = { lat: -20, lng: -70 };

function GoogleMapComponent() {
  
  const [center, setCenter] = useState<{ lat: number; lng: number }>(defaultCenter);

  useEffect(() => {
    const getData = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCenter({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.error("Error getting the user's location:", error);
            setCenter(defaultCenter);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setCenter(defaultCenter);
      }
    };

    getData();
  }, []);

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(center);
    map.fitBounds(bounds);
  }, [center]);

  return (
    <div className="w-full h-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
      />
    </div>
  );
}

export default React.memo(GoogleMapComponent);
