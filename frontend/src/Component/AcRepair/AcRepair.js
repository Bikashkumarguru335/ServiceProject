import React, { useState } from "react";
import "./ACService.css";
import About from "../About/about";
import Navbar from "../Navbar/navbar";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
const services = [

    { name: "Super saver packages", imgSrc: "data:image/png;base64,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", price: 650 },
    { name: "Service", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zYXW9FukotPdDl1DfBxCMiRC1tiy_TXlBw&s", price: 1000 },
    { name: "Repair & gas refill", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjVXAgdoWDG0QZIlyGwsZpsY1ru8iGvb4gw&s", price: 2000 },
    { name: "Installation/uninstallation", imgSrc: "data:image/jpeg;base64,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", price: 1000 },
];

const ACService = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Navbar />
            <div className="service-container">
                {/* Left Sidebar */}
                <div className="service-left">
                    <h1>AC Service and Repair</h1>
                    <p>⭐ 4.83 (4.4M bookings)</p>
                    <div className="uc-cover">
                        <p>✅ UC COVER</p>
                        <span>Upto 30 days warranty on repairs</span>
                    </div>
                    <div className="service-list">
                        {/* <div className="service-item">Super saver packages
                            
                        </div>
                        <div className="service-item">Service</div>
                        <div className="service-item">Repair & gas refill</div>
                        <div className="service-item">Installation/uninstallation</div> */}

                        {services.map((category) => (

                            <div key={category?.id} className="parlourVerity-card">
                                <img src={category?.imgSrc} alt={category.title} className='verityImg' />
                                <p>{category.name}</p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Middle Scrollable Section */}
                <div className="service-middle">
                    <h2>Select a service</h2>
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <img src={service.imgSrc} alt={service.name} />
                            <div className="service-info">
                                <h3>{service.name}</h3>
                                <p>⭐ {service.rating} ({service.reviews} reviews)</p>
                                <p>₹{service.price} • {service.time}</p>
                                <p><a href="#">View details</a></p>
                            </div>
                            <button className="add-btn" onClick={() => dispatch(addToCart(service))}>Add</button>
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
        // <div>
        //     <Navbar />
        //     <div className="ac-service-container">
        //         {/* Left Section - Service Details */}
        //         <div className="ac-service-left">
        //             <h2>AC Service and Repair</h2>
        //             <p className="rating">⭐ 4.81 (9.3M bookings)</p>

        //             {/* UC Cover */}
        //             <div className="uc-cover">
        //                 <p>✅ UC COVER</p>
        //                 <span>Upto 30 days warranty on repairs</span>
        //             </div>

        //             {/* Service Selection */}
        //             <div className="service-selection">
        //                 <p>Select a service</p>
        //                 <div className="service-options">
        //                     {services.map((service) => (
        //                         <div key={service.id} className="service-item">
        //                             <img src={service.imgSrc} alt={service.name} />
        //                             <p>{service.name}</p>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Right Section - Package and Cart */}
        //         <div className="ac-service-right">
        //             {/* Super Saver Package */}
        //             <div className="super-saver">
        //                 <div className="package-banner">
        //                     <span className="badge">Free gas checkup</span>
        //                     <h3>Super saver packages</h3>
        //                     <p>2X COOLING - Enjoy enhanced cooling</p>
        //                     <img src="technician.jpg" alt="Technician Cleaning AC" />
        //                 </div>

        //                 <div className="package-details">
        //                     <h4>Foam-jet service (2 ACs)</h4>
        //                     <p className="rating">⭐ 4.82 (811K reviews)</p>
        //                     <p className="price">
        //                         <span className="discount">₹1,098</span>
        //                         <span className="original-price">₹1,198</span>
        //                         <span className="time"> - 1 hr 30 mins</span>
        //                     </p>
        //                     <p className="per-ac">₹549 per AC</p>
        //                     <button className="add-btn">Add</button>
        //                     <ul>
        //                         <li>Indoor unit cleaning with foam & jet spray</li>
        //                         <li>Applicable for both window & split ACs</li>
        //                     </ul>
        //                 </div>
        //             </div>

        //             {/* Cart & Offers Section */}
        //             <div className="carts-section">
        //                 <p>No items in your cart 🛒</p>
        //                 <div className="offer-box">
        //                     <p>✅ Assured reward from CRED</p>
        //                     <span>On all online payments</span>
        //                     <a href="#">View More Offers ⌄</a>
        //                 </div>

        //                 {/* UC Promise */}
        //                 <div className="uc-promise">
        //                     <h4>UC Promise</h4>
        //                     <ul>
        //                         <li>✔ Verified Professionals</li>
        //                         <li>✔ Hassle Free Booking</li>
        //                         <li>✔ Transparent Pricing</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    );
};

export default ACService;
