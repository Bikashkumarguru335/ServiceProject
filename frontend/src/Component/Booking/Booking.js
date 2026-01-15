import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Booking.css"
const MyBookings = () => {
    return (
        <div className="bookings-container">
            <div className="bookings-header">
                <button className="back-button">
                    <ArrowBackIcon />
                </button>
                <h2>My Bookings</h2>
                <button className="help-button">Help</button>
            </div>

            <div className="bookings-content">
                <h3>No bookings yet.</h3>
                <p>Looks like you haven’t experienced quality services at home.</p>
                <button className="explore-button">Explore our services →</button>
            </div>
        </div>
    );
};

export default MyBookings;
