import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useRef, useCallback } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px'
};



function Map() {
  const mapRef = useRef(null); // <-- Agrega una referencia al objeto de mapa

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });

  const center = {
    lat: -34.458,
    lng: -58.914
  };

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map; // <-- Asigna la referencia del mapa a la variable de referencia
    map.setCenter(center); // <-- Actualiza la posición del mapa a la ubicación deseada
  }, []);

  return (
    isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    ) : <></>
  );
}


export default Map;
