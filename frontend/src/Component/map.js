// import React, { useRef, useEffect, useCallback, useState } from 'react'
// import { GoogleMap, LoadScript, Marker, Autocomplete } from "@react-google-maps/api";



// const GOOGLE_MAPS_API_KEY = "AIzaSyBG0s7OCg9WW_GbUfBBp04u5Hkwh3LDdYA"; // Replace with your API key

// const containerStyle = {
//     width: "100%",
//     height: "500px",
// };

// const defaultCenter = { lat: 20.5937, lng: 78.9629 }; // Default: Center of India

// const Map = () => {

//     const [mapCenter, setMapCenter] = useState(defaultCenter);
//     const [searchInput, setSearchInput] = useState(""); // Controlled input for search
//     const autocompleteRef = useRef(null);

//     // Function to update map center when user selects a place
//     const onPlaceSelected = () => {
//         if (autocompleteRef.current) {
//             const place = autocompleteRef.current.getPlace();
//             if (place && place.geometry) {
//                 setMapCenter({
//                     lat: place.geometry.location.lat(),
//                     lng: place.geometry.location.lng(),
//                 });
//             }
//         }
//     };

//     // Function to get user's current location
//     const getCurrentLocation = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const userLocation = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude,
//                     };
//                     setMapCenter(userLocation); // Move map to user's location
//                 },
//                 (error) => {
//                     console.error("Error getting location: ", error);
//                     alert("Unable to retrieve location.");
//                 }
//             );
//         } else {
//             alert("Geolocation is not supported by this browser.");
//         }
//     };

//     return (
//         <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
//             <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
//                 {/* Search Box with Autocomplete */}
//                 <Autocomplete
//                     onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
//                     onPlaceChanged={onPlaceSelected}
//                 >
//                     <input
//                         type="text"
//                         value={searchInput}
//                         onChange={(e) => setSearchInput(e.target.value)} // Controlled input
//                         placeholder="Search a place..."
//                         style={{
//                             flex: 1,
//                             padding: "10px",
//                             fontSize: "16px",
//                             border: "1px solid #ccc",
//                             borderRadius: "5px",
//                         }}
//                     />
//                 </Autocomplete>

//                 {/* Button to Get Current Location */}
//                 <button
//                     onClick={getCurrentLocation}
//                     style={{
//                         padding: "10px 15px",
//                         fontSize: "16px",
//                         backgroundColor: "#007bff",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         cursor: "pointer",
//                     }}
//                 >
//                     Use Current Location
//                 </button>
//             </div>

//             {/* Google Map Component */}
//             <GoogleMap mapContainerStyle={containerStyle} center={mapCenter} zoom={12}>
//                 <Marker position={mapCenter} />
//             </GoogleMap>
//         </LoadScript>
//     );

//     // return (
//     //     <LoadScript googleMapsApiKey="AIzaSyBG0s7OCg9WW_GbUfBBp04u5Hkwh3LDdYA">
//     //         <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
//     //             <Marker position={center} />
//     //         </GoogleMap>
//     //     </LoadScript>

//     // )
// }
// export default Map;
// // export default Map
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

// const containerStyle = {
//     width: '400px',
//     height: '400px',
// }

// const center = {
//     lat: -3.745,
//     lng: -38.523,
// }

// function MyComponent() {
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: 'YOUR_API_KEY',
//     })

//     const [map, setMap] = React.useState(null)

//     const onLoad = React.useCallback(function callback(map) {
//         // This is just an example of getting and using the map instance!!! don't just blindly copy!
//         const bounds = new window.google.maps.LatLngBounds(center)
//         map.fitBounds(bounds)

//         setMap(map)
//     }, [])

//     const onUnmount = React.useCallback(function callback(map) {
//         setMap(null)
//     }, [])

//     return isLoaded ? (
//         <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={10}
//             onLoad={onLoad}
//             onUnmount={onUnmount}
//         >
//             {/* Child components, such as markers, info windows, etc. */}
//             <></>
//         </GoogleMap>
//     ) : (
//         <></>
//     )
// }

// export default React.memo(MyComponent)

import React from "react";
import "./map.css";

const products = [
    {
        id: 1,
        title: "Native Lock Pro",
        rating: 4.9,
        reviews: "4K reviews",
        price: "₹16,499",
        image: "https://via.placeholder.com/300x200",
        features: [
            "7 ways to unlock",
            "Unlock request with visitor photo on every doorbell press",
        ],
    },
    {
        id: 2,
        title: "Smart Digital Lock",
        rating: 4.8,
        reviews: "3.5K reviews",
        price: "₹14,999",
        image: "https://via.placeholder.com/300x200",
        features: ["Fingerprint Unlock", "Auto-Lock Feature"],
    },
    {
        id: 3,
        title: "WiFi Door Lock",
        rating: 4.7,
        reviews: "2.8K reviews",
        price: "₹12,999",
        image: "https://via.placeholder.com/300x200",
        features: ["Remote Unlock", "Smartphone App Control"],
    },
    {
        id: 4,
        title: "WiFi Door Lock",
        rating: 4.7,
        reviews: "2.8K reviews",
        price: "₹12,999",
        image: "https://via.placeholder.com/300x200",
        features: ["Remote Unlock", "Smartphone App Control"],
    }, {
        id: 5,
        title: "WiFi Door Lock",
        rating: 4.7,
        reviews: "2.8K reviews",
        price: "₹12,999",
        image: "https://via.placeholder.com/300x200",
        features: ["Remote Unlock", "Smartphone App Control"],
    }, {
        id: 6,
        title: "WiFi Door Lock",
        rating: 4.7,
        reviews: "2.8K reviews",
        price: "₹12,999",
        image: "https://via.placeholder.com/300x200",
        features: ["Remote Unlock", "Smartphone App Control"],
    }, {
        id: 7,
        title: "WiFi Door Lock",
        rating: 4.7,
        reviews: "2.8K reviews",
        price: "₹12,999",
        image: "https://via.placeholder.com/300x200",
        features: ["Remote Unlock", "Smartphone App Control"],
    }, {
        id: 8,
        title: "WiFi Door Lock",
        rating: 4.7,
        reviews: "2.8K reviews",
        price: "₹12,999",
        image: "https://via.placeholder.com/300x200",
        features: ["Remote Unlock", "Smartphone App Control"],
    }, {
        id: 9,
        title: "WiFi Door Lock",
        rating: 4.7,
        reviews: "2.8K reviews",
        price: "₹12,999",
        image: "https://via.placeholder.com/300x200",
        features: ["Remote Unlock", "Smartphone App Control"],
    }, {
        id: 10,
        title: "WiFi Door Lock",
        rating: 4.7,
        reviews: "2.8K reviews",
        price: "₹12,999",
        image: "https://via.placeholder.com/300x200",
        features: ["Remote Unlock", "Smartphone App Control"],
    }, {
        id: 11,
        title: "WiFi Door Lock",
        rating: 4.7,
        reviews: "2.8K reviews",
        price: "₹12,999",
        image: "https://via.placeholder.com/300x200",
        features: ["Remote Unlock", "Smartphone App Control"],
    },
];

const ProductList = () => {
    return (
        <div className="smartLock">

            <div className="hero">
                <div className="hero-text">
                    <h1>Native Smart Locks</h1>
                    <p>⭐ 4.86 (7K bookings)</p>
                    <button className="hero-btn">View Services</button>
                </div>
                <div className="hero-image">
                    <img src="https://via.placeholder.com/500x300" alt="Smart Lock" />
                </div>
            </div>

            <div className="productPart">
                <div className="product-container">
                    <h2 className="section-title">Door Lock</h2>
                    <div className="product-list">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.title} className="product-image" />
                                <div className="product-info">
                                    <h3 className="product-title">{product.title}</h3>
                                    <p className="product-rating">⭐ {product.rating} ({product.reviews})</p>
                                    <p className="product-price">Starts at <strong>{product.price}</strong></p>
                                    <ul className="product-features">
                                        {product.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                    <button className="add-btn">Add</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="service-rights" >
                    <div className="cart">
                        <p>No items in your cart</p>
                    </div>
                    <div className="offers">
                        <p>💰 Assured reward from CRED</p>
                    </div>
                    <div className="uc-promise">
                        <h3>UC Promise</h3>
                        <p>✔ Verified Professionals</p>
                        <p>✔ Hassle-Free Booking</p>
                        <p>✔ Transparent Pricing</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductList;
