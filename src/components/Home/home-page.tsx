'use client';

import React from "react";
import SearchForm from "./search-form";
import { useJsApiLoader } from "@react-google-maps/api";
import GoogleMapComponent from "../Map/map";
const libraries: ("places")[] = ["places"];

const HomePage = () => {

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
    libraries 
  });

  if (!isLoaded) {
    return 'Loading...';
  }

  if (loadError) {
    return 'Loading error: ' + JSON.stringify(loadError);
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen p-4">
      <div className="flex-1 p-4 border rounded-lg shadow-lg md:max-w-md w-full">
        <SearchForm />
      </div>
      <div className="flex-1 p-4 border rounded-lg shadow-lg md:max-w-md w-full h-[400px] md:h-[500px]">
        <GoogleMapComponent />
      </div>
    </div>
  );
};

export default HomePage;
