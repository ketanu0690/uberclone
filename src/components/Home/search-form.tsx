"use client";
import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";


const SearchForm = () => {
  const [pickupLocation, setPickupLocation] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [dropOffLocation, setDropOffLocation] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [rideType, setRideType] = useState<"Ride" | "Package">("Ride");
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [selectedTime, setSelectedTime] = useState<string>("13:15");

  const handleRideTypeChange = (type: "Ride" | "Package") => {
    setRideType(type);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(e.target.value);
  };

  return (
    <div className="booking-form  mx-auto p-6 md:p-8  rounded-lg bg-white-100 h-auto">
      <h1 className="text-2xl md:text-5xl font-bold text-left text-black mb-6">
        {rideType === "Ride" ? "Go anywhere with Uber" : "Deliver a package"}
      </h1>

      <div className="ride-type flex justify-center space-x-2 md:space-x-4 mb-4">
        <button
          onClick={() => handleRideTypeChange("Ride")}
          className={`${
            rideType === "Ride"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          } px-3 py-2 md:px-4 md:w-28 rounded-lg`}
        >
          Ride
        </button>
        <button
          onClick={() => handleRideTypeChange("Package")}
          className={`${
            rideType === "Package"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          } px-3 py-2 md:px-4 md:w-28 rounded-lg`}
        >
          Package
        </button>
      </div>

      <div className="input-group flex flex-col mb-4">
        <label className="text-gray-600 mb-2">Pickup location</label>
        <div className="flex items-center">
          <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            selectProps={{
              value: pickupLocation,
              onChange: (e) => {
                console.log(e);
                setPickupLocation({
                  label: e?.label ?? "",
                  value: e?.value ?? "",
                });
              },

              placeholder: "PickUp location",
              isClearable: true,
              className: "w-full",
              components: {
                DropdownIndicator: null,
              },
              styles: {
                control: (prov) => ({
                  ...prov,
                  backgroundColor: "#00ffff00",
                }),
              },
            }}
          />
        </div>
      </div>

      <div className="input-group flex flex-col mb-4">
        <GooglePlacesAutocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          selectProps={{
            value: dropOffLocation,
            onChange: (e) => {
              setDropOffLocation({
                label: e?.label ?? "",
                value: e?.value ?? "",
              });
            },
            placeholder: "DropOff location",
            isClearable: true,
            className: "w-full",
            components: {
              DropdownIndicator: null,
            },
            styles: {
              control: (prov) => ({
                ...prov,
                backgroundColor: "#00ffff00",
              }),
            },
          }}
        />
      </div>

      {rideType === "Ride" && (
        <div className="datetime-picker flex flex-col mb-4">
          <label className="text-gray-600 mb-2">Date and Time</label>
          <div className="flex space-x-2">
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
            <input
              type="time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
        </div>
      )}

      <button className="see-prices-button bg-black text-white px-4 py-2 rounded-lg w-full mt-4">
        See Prices
      </button>
    </div>
  );
};

export default SearchForm;
