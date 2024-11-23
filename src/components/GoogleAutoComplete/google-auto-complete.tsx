import React, { useState, useRef } from "react";

const GoogleAutoComplete = () => {
  const [input, setInput] = useState({
    streetAddress: "",
    country: "",
    zipCode: "",
    city: "",
    state: "",
    latitude: 0,
    longitude: 0,
  });

  const inputRef = useRef<HTMLInputElement | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const handlePlaceData = (place: google.maps.places.PlaceResult) => {
    const components = place.address_components || [];
    const addressMap: Record<string, string> = components.reduce((acc, component) => {
      const type = component.types[0];
      return { ...acc, [type]: component.long_name };
    }, {});

    const formattedAddress = [
      addressMap.subpremise,
      addressMap.premise,
      addressMap.street_number,
      addressMap.route,
    ]
      .filter(Boolean)
      .join(" ")
      .trim();

    setInput({
      streetAddress: formattedAddress,
      country: addressMap.country || "",
      zipCode: addressMap.postal_code || "",
      city: addressMap.administrative_area_level_2 || "",
      state: addressMap.administrative_area_level_1 || "",
      latitude: place.geometry?.location?.lat() ?? 0,
      longitude: place.geometry?.location?.lng() ?? 0,
    });
  };

  const handleAutocomplete = (inputElement: HTMLInputElement | null) => {
    if (!inputElement || autocompleteRef.current) return;

  
    autocompleteRef.current = new google.maps.places.Autocomplete(inputElement, {
      componentRestrictions: { country: "IN" },
      fields: ["address_components", "geometry"],
    });

    // Add listener for when a place is selected
    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current!.getPlace();
      if (place && place.geometry) handlePlaceData(place);
    });
  };

  return (
    <input
      type="text"
      className="border rounded-lg px-3 py-2 w-full"
      name="streetAddress"
      placeholder="Search Places..."
      ref={(el) => {
        inputRef.current = el;
        handleAutocomplete(el); // Initialize Autocomplete once the input is ready
      }}
      value={input.streetAddress}
      onChange={(e) => setInput({ ...input, streetAddress: e.target.value })}
    />
  );
};

export default GoogleAutoComplete;
