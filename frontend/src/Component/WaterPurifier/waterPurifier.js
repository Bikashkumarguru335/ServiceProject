import React from 'react'
import About from '../About/about';
import Navbar from '../Navbar/navbar';
const WaterPurifier = () => {
    const services = [
        { id: 1, name: "Native M1", img: "package-icon.png", price: 13500 },
        { id: 2, name: "Native M2 ", img: "bathroom-icon.png", price: 16500 },
        { id: 3, name: "Native M0", img: "kitchen-icon.png", price: 11500 },
        { id: 4, name: "Native Ups for m2 ", img: "mini-icon.png", price: 999 },
    ];

    return (
        <div>
            <Navbar />
            <div className="service-container">
                {/* Left Sidebar */}
                <div className="service-left">
                    <h1>Choose purifier</h1>
                    <p>⭐ 4.83 (2.4M bookings)</p>
                    {/* <div className="service-list">
                        <div className="service-item"></div>
                        <div className="service-item">SmartLock Install</div>
                        <div className="service-item">Lock Repair</div>
                        <div className="service-item">Chinese</div>

                    </div> */}
                </div>

                {/* Middle Scrollable Section */}
                <div className="service-middle">
                    <h2>Choose The WaterPurifier</h2>
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <img src={service.image} alt={service.name} />
                            <div className="service-info">
                                <h3>{service.name}</h3>
                                <p>⭐ {service.rating} ({service.reviews} reviews)</p>
                                <p>₹{service.price} • {service.time}</p>
                                <p><a href="#">View details</a></p>
                            </div>
                            <button className="add-btn">Add</button>
                        </div>
                    ))}
                </div>

                {/* Right Sidebar (Fixed) */}
                <div className="service-right">
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
            <About />
        </div>
    )
}

export default WaterPurifier