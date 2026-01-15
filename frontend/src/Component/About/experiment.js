import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./experiment.css";

// --- Helper: Handle Map Dragging ---
const MapDragHandler = ({ onLocationChange }) => {
    const map = useMapEvents({
        moveend: () => {
            const center = map.getCenter();
            onLocationChange(center);
        }
    });
    return null;
};

// --- Helper: Fly to location (UPDATED: Slower Speed) ---
const MapFlyTo = ({ coords }) => {
    const map = useMap();
    useEffect(() => {
        if (coords) {
            // duration: 3 means it takes 3 seconds to move (slower/smoother)
            map.flyTo(coords, 16, { animate: true, duration: 3.0 });
        }
    }, [coords, map]);
    return null;
};

const Experiment = () => {
    // --- STATE ---
    const [isVisible, setIsVisible] = useState(true);
    const [view, setView] = useState('search');
    const [coordinates, setCoordinates] = useState({ lat: 20.2961, lng: 85.8245 });
    const [address, setAddress] = useState("Loading address...");

    // Search State
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isLocating, setIsLocating] = useState(false);
    const [location, setLocation] = useState(" ");
    // --- 1. HANDLE CLOSE ---
    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    // --- 2. SEARCH INPUT ---
    const handleSearchInput = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length > 2) {
            try {
                const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=5`);
                const data = await res.json();
                setSearchResults(data);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        } else {
            setSearchResults([]);
        }
    };

    // --- 3. SELECT LOCATION ---
    const handleSelectLocation = (location) => {
        const lat = parseFloat(location.lat);
        const lng = parseFloat(location.lon);
        setCoordinates({ lat, lng });
        setAddress(location.display_name);
        setSearchResults([]);
        setView('map');
    };

    // --- 4. REVERSE GEOCODE ---
    const fetchAddress = async (lat, lng) => {
        setLoading(true);
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
            const data = await res.json();
            setAddress(data.display_name);
        } catch (e) {
            setAddress("Location selected");
        }
        setLoading(false);
    };

    // --- 5. USE CURRENT LOCATION ---
    const handleUseCurrentLocation = () => {
        setIsLocating(true);
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            setIsLocating(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCoordinates({ lat: latitude, lng: longitude });
                fetchAddress(latitude, longitude);
                setView('map');
                setIsLocating(false);
            },
            (error) => {
                console.error("Error getting location:", error);
                alert("Unable to retrieve location.");
                setIsLocating(false);
            }
        );
    };

    // --- 6. DRAG END ---
    const onMapDragEnd = (center) => {
        setCoordinates(center);
        fetchAddress(center.lat, center.lng);
    };

    // --- 7. CONFIRM ---
    const handleConfirm = () => {
        setLocation(address)
        console.log(setLocation);
        alert(`Location Confirmed:\n\n${address}`);
    };

    return (
        <div className="uc-overlay">
            <div className="uc-modal">

                <button className="close-icon-btn" onClick={handleClose}>&times;</button>

                {/* ================= VIEW 1: SEARCH ================= */}
                {view === 'search' && (
                    <>
                        <div className="search-header">
                            <div className="input-wrapper">
                                <span>←</span>
                                <input
                                    type="text"
                                    placeholder="Search for location..."
                                    value={searchQuery}
                                    onChange={handleSearchInput}
                                    autoFocus
                                />
                            </div>

                            {/* Dropdown Results */}
                            {searchResults.length > 0 && (
                                <div className="search-results-list">
                                    {searchResults.map((item) => (
                                        <div key={item.place_id} className="search-result-item" onClick={() => handleSelectLocation(item)}>
                                            <span>📍</span> <p>{item.display_name}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Use Current Location */}
                            <button className="current-loc-btn" onClick={handleUseCurrentLocation} disabled={isLocating}>
                                <span className="gps-icon">⌖</span>
                                {isLocating ? "Fetching location..." : "Use current location"}
                            </button>
                        </div>
                    </>
                )}

                {/* ================= VIEW 2: MAP ================= */}
                {view === 'map' && (
                    <div className="map-view-container">

                        <MapContainer center={coordinates} zoom={16} style={{ flex: 1, width: '100%' }}>

                            {/* CHANGED: Switched back to Standard OpenStreetMap to SHOW NAMES */}
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />

                            <MapDragHandler onLocationChange={onMapDragEnd} />
                            <MapFlyTo coords={coordinates} />
                        </MapContainer>

                        <div className="center-pin">
                            <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" className="pin-image" alt="Pin" />
                        </div>

                        <div className="map-footer">
                            <div className="map-address-box">
                                <h3>Location Selected</h3>
                                <p className="address-text">{loading ? "Fetching address..." : address}</p>
                            </div>

                            <button className="confirm-btn" onClick={handleConfirm} disabled={loading}>
                                Confirm Location
                            </button>

                            <div className="change-search-btn" onClick={() => setView('search')}>
                                Change Search
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Experiment;