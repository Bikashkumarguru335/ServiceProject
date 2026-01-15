import React from 'react'
import "../Electrical/ElectricianService.css"; // Import CSS file
import Navbar from "../Navbar/navbar";
import About from "../About/about";

const bathroomKitchen = () => {
    // const services = [
    //     { id: 1, name: "Packages", img: "package-icon.png", price: 750 },
    //     { id: 2, name: "Bathroom cleaning", img: "bathroom-icon.png", price: 350 },
    //     { id: 3, name: "Kitchen cleaning", img: "kitchen-icon.png", price: 250 },
    //     { id: 4, name: "Mini services", img: "mini-icon.png", price: 200 },
    // ];
    const services = [
        {
            id: 1,
            name: "Packages",
            img: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
            price: 750
        },
        {
            id: 2,
            name: "Bathroom cleaning",
            img: "https://cdn-icons-png.flaticon.com/512/2221/2221543.png",
            price: 350
        },
        {
            id: 3,
            name: "Kitchen cleaning",
            img: "https://cdn-icons-png.flaticon.com/512/1205/1205151.png",
            price: 250
        },
        {
            id: 4,
            name: "Mini services",
            img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
            price: 200
        },
    ];
    const cleaningCategories = [
        {
            name: "Combos",
            image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Bathroom cleaning",
            image: "data:image/jpeg;base64,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"
        },
        {
            name: "Kitchen cleaning",
            image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Mini Services",
            image: "data:image/jpeg;base64,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"
        }
    ];
    return (
        <div>
            <Navbar />
            <div className="service-container">
                {/* Left Sidebar */}
                <div className="service-left">
                    <h1>Bathroom & kitchen cleaning</h1>
                    <p>⭐ 4.83 (4.4M bookings)</p>
                    {/* <div className="service-list">
                        <div className="service-item">Combos</div>
                        <div className="service-item">Bathroom cleaning</div>
                        <div className="service-item">Kitchen cleaning</div>
                        <div className="service-item">Mini Services</div>

                    </div> */}
                    <div className="service-list">
                        {cleaningCategories.map((item, index) => (
                            <div className="parlourVerity-card" key={index}>
                                <img src={item.image} alt={item.name} className="verityImg" />
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Middle Scrollable Section */}
                <div className="service-middle">
                    <h2>Cleaning</h2>
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

export default bathroomKitchen;