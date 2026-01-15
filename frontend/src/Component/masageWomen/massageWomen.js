import React, { useState } from 'react'
import "./massageWomen.css"
import Navbar from '../Navbar/navbar';
import About from '../About/about';
// import { Dialog, Button, DialogContent, DialogActions } from '@mui/material';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Grid2, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const MassageWomen = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const openDialog = () => {
        setOpen(true);
    }
    const closeDialog = () => {
        setOpen(false);
    }
    const handleMassageWomen = () => {
        openDialog();

    }
    const openDialog1 = () => {
        setOpen1(true);
    }
    const closeDialog1 = () => {
        setOpen1(false);
    }
    const handleDialog2 = () => {
        openDialog1()
    }
    const service = [
        { id: 1, name: "Salon for Women", img: "https://via.placeholder.com/50" },
        { id: 2, name: "Spa for Women", img: "https://via.placeholder.com/50" },
        { id: 3, name: "Hair Studio for Women", img: "https://via.placeholder.com/50" },
    ];

    const services = [
        { name: "Post natal", handleClick: handleMassageWomen, img: "https://img.freepik.com/premium-photo/beautiful-brunette-enjoying-back-massage-against-fir-tree-forest-snowflakes_1134-56242.jpg?uid=R190161950&ga=GA1.1.358881444.1711303040&semt=ais_hybrid" },
        { name: "Stress relief", handleClick: handleDialog2, img: "https://img.freepik.com/free-photo/person-conducting-reiki-therapy_23-2149403926.jpg?uid=R190161950&ga=GA1.1.358881444.1711303040&semt=ais_hybrid" },
        { name: "Pain relief", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682056725112-ad24c4.jpeg" },
        { name: "Skin care scrubs", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682056713549-2dc41c.jpeg" },
        { name: "Add-ons", img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682056695001-f64eb0.jpeg" },
    ];
    const postNatalPackages = [
        {
            id: 1,
            title: "Ultimate care for moms",
            pressure: "Medium pressure",
            duration: "75 mins • Full body",
            rating: "4.86 (211 reviews)",
            price: "₹1,499 • 1 hr 15 mins",
            description: "Reduces water retention, improves circulation & eases muscle tension.",
            image: "https://via.placeholder.com/400x200",
        },
        {
            id: 2,
            title: "Relaxing Postpartum Massage",
            pressure: "Light pressure",
            duration: "60 mins • Full body",
            rating: "4.92 (150 reviews)",
            price: "₹1,299 • 1 hr",
            description: "Relieves postpartum stress & improves muscle recovery.",
            image: "https://via.placeholder.com/400x200",
        },
        {
            id: 3,
            title: "Full Recovery Massage",
            pressure: "High pressure",
            duration: "90 mins • Deep tissue",
            rating: "4.80 (98 reviews)",
            price: "₹1,799 • 1 hr 30 mins",
            description: "Deep tissue massage to help with postpartum muscle pain and tension.",
            image: "https://via.placeholder.com/400x200",
        },
        {
            id: 4,
            title: "Ultimate care for moms",
            pressure: "Medium pressure",
            duration: "75 mins • Full body",
            rating: "4.86 (211 reviews)",
            price: "₹1,499 • 1 hr 15 mins",
            description: "Reduces water retention, improves circulation & eases muscle tension.",
            image: "https://via.placeholder.com/400x200",
        },
        {
            id: 5,
            title: "Ultimate care for moms",
            pressure: "Medium pressure",
            duration: "75 mins • Full body",
            rating: "4.86 (211 reviews)",
            price: "₹1,499 • 1 hr 15 mins",
            description: "Reduces water retention, improves circulation & eases muscle tension.",
            image: "https://via.placeholder.com/400x200",
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="container">
                {/* Left Sidebar */}
                <div className="sidebar">
                    <h2>Massage Therapy for Women</h2>

                    <Dialog open={open} onClose={closeDialog}
                        maxWidth="lr"
                        fullWidth

                        sx={{
                            "& .MuiPaper-root": {
                                width: "700px",
                                maxHeight: "300px", // Set max height for the scrollable area
                                overflowY: "auto", // Add vertical scrollbar if content overflows
                                borderRadius: "15px",
                                padding: "20px",
                                backgroundColor: "#f5f5f5",
                            },
                        }}

                    >
                        <CloseIcon className="close-icon" onClick={closeDialog} />

                        <DialogContent>
                            <div style={{ position: "relative", width: "100%" }}>
                                <h1>Women's Salon & Spa</h1>
                                <div className='popUpImg'>
                                    <img src='https://cdn-icons-png.flaticon.com/128/1005/1005735.png' />
                                    <img src='https://cdn-icons-png.flaticon.com/128/5662/5662383.png' />
                                    <img src='https://cdn-icons-png.flaticon.com/128/4352/4352961.png' />
                                </div>
                            </div>


                        </DialogContent>

                    </Dialog>
                    <Dialog open={open1} onClose={() => setOpen1(false)} maxWidth="sm" fullWidth>
                        {/* Title with Close Button */}
                        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            Women's Salon & Spa
                            <IconButton onClick={() => setOpen1(false)} sx={{
                                position: 'absolute',
                                top: -5,
                                right: -3,
                                background: 'white',
                                boxShadow: 2,
                                borderRadius: "50%",

                                '&:hover': { background: '#f0f0f0' }
                            }}
                            >
                                <CloseIcon sx={{ backgroundColor: "white" }} />
                            </IconButton>
                        </DialogTitle>

                        {/* Content */}
                        <DialogContent>
                            <Grid2 container spacing={2} justifyContent="center">
                                {services.map((service) => (
                                    <Grid2 item key={service.id} xs={4} sx={{ textAlign: "center", cursor: "pointer" }} onClick={() => alert(service.name)}>
                                        <img src={service.img} alt={service.name} style={{ width: 50, height: 50 }} />
                                        <Typography variant="body2">{service.name}</Typography>
                                    </Grid2>
                                ))}
                            </Grid2>
                        </DialogContent>
                    </Dialog>

                    <p className="ratings">⭐ 4.83 (2.8M bookings)</p>
                    <div className="services">
                        <p className="services">Select a service</p>
                        <div className="verity-grid">
                            {services.map((category) => (

                                <div key={category?.id} onClick={category.handleClick} className="parlourVerity-card">
                                    <img src={category?.img} alt={category.name} className='verityImg' />
                                    <p>{category.name}</p>
                                </div>
                            ))}

                        </div>

                        {/* <div className="service-list">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <img src={service.img} alt={service.name} />
                                <p>{service.name}</p>
                            </div>
                        ))}
                    </div> */}
                    </div>
                </div>

                {/* Main Content */}
                {/* Main Content */}
                <div className="main-content">
                    <h3>Post natal</h3>

                    {/* Scrollable Packages Section */}
                    <div className="scroll-container">
                        {postNatalPackages.map((packageData) => (
                            <div key={packageData.id} className="massage-card">
                                <img src={packageData.image} alt="Massage" />
                                <div className="massage-info">
                                    <h2>{packageData.title}</h2>
                                    <span className="tag">⚖ {packageData.pressure}</span>
                                    <p>{packageData.duration}</p>
                                    <p className="ratings">⭐ {packageData.rating}</p>
                                    <p className="price">{packageData.price}</p>
                                    <button className="add-btn" onClick={() => dispatch(addToCart(packageData))}>Add</button>
                                    <p className="description">{packageData.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="cart-sections">
                    <div className="cart-box">
                        <p>No items in your cart</p>
                    </div>
                    <div className="offers">
                        <p>✅ Assured reward from CRED</p>
                        <a href="#">View More Offers</a>
                    </div>
                    <div className="uc-promise">
                        <h4>UC Promise</h4>
                        <ul>
                            <li>✔ 4.5+ Rated Therapists</li>
                            <li>✔ Relaxation Assured</li>
                            <li>✔ Specialized Premium Oils</li>
                        </ul>
                    </div>
                </div>
            </div>
            <About />

        </div>

    )
}

export default MassageWomen