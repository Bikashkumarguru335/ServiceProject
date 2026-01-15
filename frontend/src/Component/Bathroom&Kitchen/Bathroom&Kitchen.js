import React, { useState } from 'react'
import "./bathroomKitchen.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import About from '../About/about';
import Navbar from '../Navbar/navbar';
const BathroomKitchen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const services = [
        { id: 1, name: "Sofa Cleaning", img: "package-icon.png", price: 1000 },
        { id: 2, name: "Carpet cleaning", img: "bathroom-icon.png", price: 500 },
        { id: 3, name: "Dining cleaning", img: "kitchen-icon.png", price: 300 },
        { id: 4, name: "Mattress", img: "mini-icon.png", price: 600 },
    ];

    const slides = [
        { img: "https://img.freepik.com/free-photo/man-doing-professional-home-cleaning-service_23-2150358964.jpg?uid=R190161950&ga=GA1.1.358881444.1711303040&semt=ais_hybrid" },
        // { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_546,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731500925639-adc8a2.jpeg" },
        // , { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_546,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731500925639-adc8a2.jpeg" },
        // , { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_546,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731500925639-adc8a2.jpeg" },
        // , { img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_546,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1731500925639-adc8a2.jpeg" },

    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);

    };
    const navigate = useNavigate();

    const handelCleaning = () => {
        navigate("/bathroom&kitchen")
    }
    return (
        <div>
            <Navbar />
            <div className="service-container">
                {/* Left Sidebar */}
                <div className="service-left">
                    <h1>Sofa & Carpet Cleaning</h1>
                    <p>⭐ 4.83 (4.4M bookings)</p>
                    <div className="service-list">
                        <div className="service-item">Sofa Cleaning</div>
                        <div className="service-item">Carpet cleaning</div>
                        <div className="service-item">Dining cleaning</div>
                        <div className="service-item">Mattress</div>

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
        // <div className="cleaning-container">
        //     <Navbar />
        //     {/* Left Section - Service Details */}
        //     <div className='firstPart'>
        //         <div className="cleaning-left">
        //             <h1>Sofa & Carpet Cleaning</h1>
        //             <p className="rating">⭐ 4.79 (7.9 M bookings)</p>
        //             <div className="service-selection">
        //                 <p>Select a service</p>
        //                 <div className="service-options">
        //                     {services.map((service) => (
        //                         <div key={service.id} className="service-item">
        //                             <img src={service.img} alt={service.name} />
        //                             <p>{service.name}</p>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Right Section - Image Slider */}
        //         <div className="cleaning-right">
        //             <div className="slider">
        //                 <button className="arrow left" onClick={prevSlide}>&lt;</button>
        //                 {slides.map((slide) => (
        //                     <div key={slide.id} className="slide" onClick={handelCleaning}>

        //                         <img src={slide?.img} alt="Cleaning Process" />
        //                     </div>
        //                 ))}
        //                 <button className="arrow right" onClick={nextSlide}>&gt;</button>
        //             </div>
        //         </div>

        //     </div>
        //     <About />
        // </div>

    )
}

export default BathroomKitchen