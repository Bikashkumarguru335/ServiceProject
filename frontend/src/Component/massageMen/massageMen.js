import React from 'react'
import Navbar from '../Navbar/navbar';
import About from '../About/about';
import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/cartSlice";
import "../Electrical/ElectricianService.css"; // Import CSS file

const MassageForMen = () => {
    const services = [
        {
            name: "Haircut for Men",
            price: 249,
            time: "45 mins",
            rating: 4.89,
            reviews: "25K",
            image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=500&auto=format&fit=crop"
        },
        {
            name: "Beard Styling & Shave",
            price: 199,
            time: "25 mins",
            rating: 4.82,
            reviews: "15K",
            image: "https://images.unsplash.com/photo-1621605815841-aa887ad43617?q=80&w=500&auto=format&fit=crop"
        },
        {
            name: "Hair Color (L'Oreal)",
            price: 499,
            time: "50 mins",
            rating: 4.75,
            reviews: "8K",
            image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=500&auto=format&fit=crop"
        },
        {
            name: "Face Glow Facial",
            price: 599,
            time: "40 mins",
            rating: 4.88,
            reviews: "12K",
            image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=500&auto=format&fit=crop"
        },
        {
            name: "Pedicure/Manicure",
            price: 399,
            time: "45 mins",
            rating: 4.85,
            reviews: "10K",
            image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=500&auto=format&fit=crop"
        },
        {
            name: "Stress Relief Massage",
            price: 999,
            time: "60 mins",
            rating: 4.91,
            reviews: "22K",
            image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=500&auto=format&fit=crop"
        },
        {
            name: "Deep Tissue Therapy",
            price: 1299,
            time: "60 mins",
            rating: 4.87,
            reviews: "14K",
            image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=500&auto=format&fit=crop"
        },
        {
            name: "Foot Reflexology",
            price: 499,
            time: "30 mins",
            rating: 4.93,
            reviews: "19K",
            image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=500&auto=format&fit=crop"
        },
        {
            name: "Neck & Shoulder Massage",
            price: 399,
            time: "20 mins",
            rating: 4.84,
            reviews: "11K",
            image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=500&auto=format&fit=crop"
        },
        {
            name: "Head Massage (Champissage)",
            price: 249,
            time: "15 mins",
            rating: 4.95,
            reviews: "30K",
            image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=500&auto=format&fit=crop"
        }

    ];
    const dispatch = useDispatch();
    return (
        <div>
            <Navbar />
            <div className="service-container">
                {/* Left Sidebar */}
                <div className="service-left">
                    <h2>Electrician</h2>
                    <p>⭐ 4.83 (4.4M bookings)</p>
                    <div className="service-list">
                        {
                            services.map((electrical) => (
                                <div key={electrical?.id} className="parlourVerity-card">
                                    <img src={electrical?.image} alt={electrical.title} className='verityImg' />
                                    <p>{electrical.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Middle Scrollable Section */}
                <div className="service-middle">
                    <h2>Switch & socket</h2>
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <img src={service.image} alt={service.name} />
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

    )
}

export default MassageForMen