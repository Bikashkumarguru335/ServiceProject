import React, { useState, useEffect } from 'react';
import './NativePage.css';
import Navbar from '../Navbar/navbar';
import About from '../About/about';
const Native = () => {
    const [view, setView] = useState('landing'); // 'landing' or 'listing'

    // Auto-scroll to top on view change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    // --- Header Component ---
    const Header = () => (
        <nav className="uc-navbar">
            <Navbar />
        </nav>
    );

    // --- Landing View ---
    const LandingView = () => (
        <div className="fade-in">
            {/* Hero 1: Water Purifier */}
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-text">
                        <span className="promo-tag">Up to ₹2,100 off</span>
                        <p className="product-series">NATIVE M1 & M2 PRO & M0</p>
                        <h1 className="hero-title">Needs no service<br />for 2 years</h1>
                        <button className="btn-dark" onClick={() => setView('listing')}>Know more</button>
                    </div>
                    <div className="hero-image">
                        <img src="https://miro.medium.com/v2/resize:fit:1400/1*-fw1BKfmwYffqwOo7OmdGA.png" alt="Native Water Purifiers" />
                    </div>
                </div>
            </section>

            {/* Feature Grid 1 */}
            <section className="features-section">
                <h2 className="section-heading">Best-in-class features</h2>
                <div className="grid-container">
                    <div className="feature-card">
                        <h3>Filters</h3>
                        <p>Superior filters that really last for 2 years</p>
                        <div className="card-visual glass-effect"></div>
                    </div>
                    <div className="feature-card">
                        <h3>Purification</h3>
                        <p>10-stage purifier</p>
                        <div className="card-visual purification-layers"></div>
                    </div>
                    <div className="feature-card">
                        <h3>Smart app</h3>
                        <p>Monitor everything with the UC app</p>
                        <div className="card-visual app-preview"></div>
                    </div>
                </div>
            </section>

            {/* Hero 2: Smart Lock */}
            <section className="hero-section lock-bg">
                <div className="hero-container reverse">
                    <div className="hero-text">
                        <span className="promo-tag">Up to ₹1,800 off</span>
                        <p className="product-series">LOCK PRO</p>
                        <h1 className="hero-title">Camera. Doorbell.<br />7-way unlock. All-in-one.</h1>
                        <button className="btn-dark">Know more</button>
                    </div>
                    <div className="hero-image">
                        <img src="https://i.ytimg.com/vi/ApnFu7vAbZU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDuiwKIx3JKqxTO5lJE3MQWT3M5gg" alt="Native Smart Lock" />
                    </div>
                </div>
            </section>

            {/* Ethos Section */}
            <section className="ethos-section">
                <div className="ethos-content">
                    <h2>Innovative. Customer-first products.</h2>
                    <h2>Designed in India, for India.</h2>
                    <p>At Native, we don't follow trends. We set new standards. Every product is deeply researched, built from scratch by industry experts, crafted with precision, and tested rigorously.</p>
                    <div className="native-watermark">NATIVE</div>
                </div>
            </section>
        </div>
    );

    // --- Product Listing View ---
    const ListingView = () => (
        <div className="listing-wrapper fade-in">
            <div className="listing-header">
                <h1>Native water purifiers</h1>
                <p>Needs no service for 2 years</p>
                <button className="compare-link">Compare models ›</button>
            </div>

            <div className="product-grid">
                <div className="product-row">
                    <div className="p-details">
                        <span className="badge-new">New Launch</span>
                        <h3>Native M2 Pro</h3>
                        <div className="p-rating">⭐ 4.82 (12K reviews)</div>
                        <div className="p-price">
                            <span className="price-now">₹18,499</span>
                            <span className="price-was">₹22,999</span>
                        </div>
                        <button className="btn-text">View Details</button>
                    </div>
                    <div className="p-action">
                        <div className="p-img-box"></div>
                        <button className="btn-add">Add</button>
                    </div>
                </div>

                <div className="product-row">
                    <div className="p-details">
                        <h3>Native M1</h3>
                        <div className="p-rating">⭐ 4.85 (25K reviews)</div>
                        <div className="p-price">
                            <span className="price-now">₹14,499</span>
                            <span className="price-was">₹17,999</span>
                        </div>
                        <button className="btn-text">View Details</button>
                    </div>
                    <div className="p-action">
                        <div className="p-img-box"></div>
                        <button className="btn-add">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="native-page">
            <Header />
            <main>
                {view === 'landing' ? <LandingView /> : <ListingView />}
            </main>

            {/* Footer */}
            <About />
        </div>
    );
};

export default Native;