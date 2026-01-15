import React from 'react';
import "./note.css";
import Navbar from '../Navbar/navbar';
import About from './about';

// --- MUI Icons ---
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Note = () => {

    const categories = [
        { id: 1, name: 'North Indian', img: 'https://images.unsplash.com/photo-1585937421612-70a008356f36?auto=format&fit=crop&w=100&q=80' },
        { id: 2, name: 'South Indian', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=100&q=80' },
        { id: 3, name: 'Chinese', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=100&q=80' },
        { id: 4, name: 'Healthy', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=100&q=80' },
        { id: 5, name: 'Breads', img: 'https://post.healthline.com/wp-content/uploads/2020/09/naan-bread-732x549-thumbnail.jpg' },
        { id: 6, name: 'Party Chef', img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=100&q=80' },
    ];

    const services = [
        {
            id: 1,
            title: "Weekend Family Feast",
            rating: "4.85 (2.1M reviews)",
            price: 899,
            originalPrice: 1200,
            time: "3 hrs",
            tag: "PACKAGE",
            details: ["Preparation: Chopping & cutting", "Cooking: 2 Sabzi, 1 Dal, Rice", "Cleanup included"]
        },
        {
            id: 2,
            title: "Weekly Meal Prep (5 Days)",
            rating: "4.92 (500k reviews)",
            price: 2499,
            originalPrice: 3500,
            time: "4 hrs / visit",
            tag: "BESTSELLER",
            details: ["Bulk cooking for week", "Fridge storage included", "Custom Menu"]
        },
        {
            id: 3,
            title: "Dinner Party Special",
            rating: "4.75 (120k reviews)",
            price: 1499,
            originalPrice: 2000,
            time: "5 hrs",
            tag: "PREMIUM",
            details: ["3-Course Meal", "Live Counters", "Table Setting"]
        }
    ];

    return (
        <div className="main-layout-container">
            {/* Navbar stays fixed at top */}
            <Navbar />

            <div className="content-area">

                {/* --- 1. LEFT SIDEBAR --- */}
                <div className="sidebar-col">
                    <h3>Select a service</h3>
                    <div className="category-grid">
                        {categories.map((cat) => (
                            <div key={cat.id} className="cat-item">
                                <div className="cat-img-box">
                                    <img src={cat.img} alt={cat.name} className="cat-img" />
                                </div>
                                <span>{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- 2. MIDDLE CONTENT (Scrolls) --- */}
                <div className="middle-col">
                    <h2>Chef Specials</h2>

                    <div className="hero-banner">
                        <div className="banner-content">
                            <p>Home Cooking Package</p>
                            <h1>20% OFF</h1>
                            <p>Pick from North Indian, Italian & more</p>
                        </div>
                        <img className="banner-bg-img" src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Cooking" />
                    </div>

                    {/* Service Cards Loop */}
                    {services.map(service => (
                        <div key={service.id} className="service-card">
                            <div className="card-top">
                                <span className="pack-tag">{service.tag}</span>
                                <button className="add-button">Add</button>
                            </div>
                            <h4>{service.title}</h4>
                            <div className="rating-row">
                                <span className="star-badge"><StarIcon style={{ fontSize: 10 }} /> 4.84</span>
                                <span>{service.rating}</span>
                            </div>
                            <div className="price-box">
                                <strong>₹{service.price}</strong>
                                <del>₹{service.originalPrice}</del>
                                <span>• {service.time}</span>
                            </div>
                            <hr className="card-divider" />
                            <ul className="details-ul">
                                {service.details.map((d, i) => <li key={i}>• {d}</li>)}
                            </ul>
                            <button className="edit-pkg-btn">Edit your package</button>
                        </div>
                    ))}

                    {/* Duplicate Loop to enable scrolling */}
                    {services.map(service => (
                        <div key={`dup-${service.id}`} className="service-card">
                            <div className="card-top">
                                <span className="pack-tag">{service.tag}</span>
                                <button className="add-button">Add</button>
                            </div>
                            <h4>{service.title}</h4>
                            <div className="rating-row">
                                <span className="star-badge"><StarIcon style={{ fontSize: 10 }} /> 4.84</span>
                                <span>{service.rating}</span>
                            </div>
                            <div className="price-box">
                                <strong>₹{service.price}</strong>
                                <del>₹{service.originalPrice}</del>
                                <span>• {service.time}</span>
                            </div>
                            <hr className="card-divider" />
                            <ul className="details-ul">
                                {service.details.map((d, i) => <li key={i}>• {d}</li>)}
                            </ul>
                            <button className="edit-pkg-btn">Edit your package</button>
                        </div>
                    ))}

                    {/* Footer / About Section inside scrollable area */}
                    <div style={{ marginTop: '40px' }}>
                        <About />
                    </div>
                </div>

                {/* --- 3. RIGHT SIDEBAR --- */}
                <div className="right-col">
                    <div className="widget-box empty-cart">
                        <div className="cart-icon-wrap">
                            <ShoppingCartOutlinedIcon style={{ fontSize: 32, color: '#ccc' }} />
                            <span className="badge-count">0</span>
                        </div>
                        <p style={{ color: '#666', fontSize: '14px' }}>No items in your cart</p>
                    </div>

                    <div className="widget-box">
                        <div className="offer-row">
                            <div className="offer-icon"><LocalOfferOutlinedIcon fontSize="small" /></div>
                            <div>
                                <strong style={{ fontSize: '13px', display: 'block' }}>Cred Pay cashback up to ₹250</strong>
                                <span style={{ fontSize: '11px', color: '#666' }}>Via Cred UPI Payment</span>
                            </div>
                        </div>
                        <div style={{ color: '#6e42e5', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
                            View More Offers <KeyboardArrowDownIcon style={{ verticalAlign: 'middle', fontSize: 16 }} />
                        </div>
                    </div>

                    <div className="widget-box">
                        <div className="promise-row">
                            <h3>UC Promise</h3>
                            <img src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png" width="40" alt="seal" />
                        </div>
                        <ul className="promise-list" style={{ listStyle: 'none', padding: 0 }}>
                            <li><CheckCircleOutlineIcon fontSize="inherit" /> 4.5+ Rated Chefs</li>
                            <li><CheckCircleOutlineIcon fontSize="inherit" /> Background Verified</li>
                            <li><CheckCircleOutlineIcon fontSize="inherit" /> Hygiene Priority</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Note;