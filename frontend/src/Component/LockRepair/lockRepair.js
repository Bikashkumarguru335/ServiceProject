import React from 'react'
import About from '../About/about';
import Navbar from '../Navbar/navbar';
import "./LockRepair.css"
const LockRepair = () => {
    // const services = [
    //     { id: 1, name: "Buy SmartLock", img: "package-icon.png", price: 10000 },
    //     { id: 2, name: "Buy SmartLock  and Install ", img: "bathroom-icon.png", price: 10000 },
    //     { id: 3, name: "Repair SmartLock", img: "kitchen-icon.png", price: 500 },
    //     { id: 4, name: "Buy Lock ", img: "mini-icon.png", price: 250 },
    // ];
    const services = [
        {
            id: 1,
            name: "Buy SmartLock",
            img: "https://images.unsplash.com/photo-1558002038-103792e07a70?q=80&w=400&auto=format&fit=crop",
            price: 10000
        },
        {
            id: 2,
            name: "Buy SmartLock & Install",
            img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=400&auto=format&fit=crop",
            price: 12000
        },
        {
            id: 3,
            name: "Repair SmartLock",
            img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop",
            price: 500
        },
        {
            id: 4,
            name: "Buy Standard Lock",
            img: "https://images.unsplash.com/photo-1619542402915-dcaf30e4e2a1?q=80&w=400&auto=format&fit=crop",
            price: 250
        },
    ];
    return (
        <div>
            <Navbar />
            <div className="service-container">
                {/* Left Sidebar */}
                <div className="service-left">
                    <h1>SmartLock</h1>
                    <p>⭐ 4.83 (2.4M bookings)</p>
                    {/* <div className="service-list">
                        <div className="service-item">SmartLock</div>
                        <div className="service-item">SmartLock Install</div>
                        <div className="service-item">Lock Repair</div>

                    </div> */}
                    <div className="service-item">
                        <img src="data:image/jpeg;base64,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" alt="SmartLock" />
                        <span>SmartLock</span>
                    </div>

                    <div className="service-item">
                        <img src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=150&auto=format&fit=crop" alt="Install" />
                        <span>SmartLock Install</span>
                    </div>

                    <div className="service-item">
                        <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=150&auto=format&fit=crop" alt="Repair" />
                        <span>Lock Repair</span>
                    </div>
                </div>

                {/* Middle Scrollable Section */}
                <div className="service-middle">
                    <h2>Choose The Lock</h2>
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <img src={service.img} alt={service.name} />
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

export default LockRepair