import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import axios from 'axios';

// --- MUI & Icons ---
import { Dialog, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    const navigate = useNavigate();
    const searchRef = useRef(null);
    const profileRef = useRef(null);

    // --- State ---
    const [locationOpen, setLocationOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showSearchDropdown, setShowSearchDropdown] = useState(false);

    // Search State
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [locationValue, setLocationValue] = useState("New Delhi, India");

    // --- AUTH STATE ---
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState(["", "", "", ""]); // Array for 4 digit inputs
    const [showOtpInput, setShowOtpInput] = useState(false); // Toggle between Phone & OTP view
    const [user, setUser] = useState(null); // Store logged in user

    // Check if user is logged in on load
    // useEffect(() => {
    //     const storedUser = localStorage.getItem('user');
    //     if (storedUser) setUser(JSON.parse(storedUser));
    // }, []);

    // --- Auth Handlers ---
    // const storedPhone = localStorage.getItem('userPhone');
    // if (storedPhone) {
    //     console.log("User's phone is:", storedPhone);
    // You can set it to state if needed
    // setPhone(storedPhone);
    // }
    // 1. Send OTP

    const handleSendOtp = async () => {
        const storedPhone = localStorage.getItem('userPhone');
        console.log(storedPhone);
        if (storedPhone)
            return alert("User Already Login")

        else if (phone.length !== 10)
            return alert("Please enter valid number");
        try {
            // Replace with your actual backend URL
            await axios.post('http://localhost:5000/userApi/send-otp', { phone });
            setShowOtpInput(true); // Switch to OTP view
        } catch (error) {
            console.error(error.message);
            alert("Failed to send OTP");
        }
    };

    // 2. Verify OTP
    const handleVerifyOtp = async () => {
        const enteredOtp = otp.join("");
        try {
            const res = await axios.post('http://localhost:5000/userApi/otpVerify', { phone, otp: enteredOtp });
            console.log(res);
            // Save to local storage
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));


            localStorage.setItem('userPhone', phone);

            setUser(res.data.user);
            setLoginOpen(false);
            alert("Login Successful!");

            // Reset states
            setShowOtpInput(false);
            setPhone("");
            setOtp(["", "", "", ""]);
        } catch (error) {
            alert("Invalid OTP");
        }
    };

    // Helper for OTP Input boxes
    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Auto focus next input
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    // --- Standard Navbar Logic (Search, Location, Click Outside) ---
    const handleManualSearch = async () => {
        if (!searchQuery.trim()) return;
        try {
            const res = await axios.get(`http://localhost:5000/api/search?q=${searchQuery}`);
            setSearchResults(res.data);
            setShowSearchDropdown(true);
        } catch (error) { console.error(error); }
    };

    const handleKeyDown = (e) => { if (e.key === 'Enter') handleManualSearch(); };

    const handleSelectService = (categorySlug) => {
        navigate(`/${categorySlug}`);
        setShowSearchDropdown(false);
        setSearchQuery("");
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setShowProfileMenu(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) setShowSearchDropdown(false);
            if (profileRef.current && !profileRef.current.contains(event.target)) setShowProfileMenu(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    return (
        <div className='Navbar'>
            {/* 1. Brand */}
            <div className='First-navbar'>
                <img src="https://st2.depositphotos.com/5943796/11433/v/450/depositphotos_114332518-stock-illustration-initial-letter-sc-silver-gold.jpg" alt="Logo" className="Navbar-Logo" />
                <h2 className="Title" onClick={() => navigate('/')}>ServiceFy</h2>
                <div className="firstNavbarOption">
                    <span className="nav-link" onClick={() => navigate('/native')}>Native</span>
                    {/* <span className="nav-link">Outdoor</span>
                    <span className="nav-link">Cook</span> */}
                </div>
            </div>

            {/* 2. Middle (Search/Location) */}
            <div className='Second-navbar'>
                <div className='nav-pill location-pill' onClick={() => navigate("/experiment")}>
                    <FmdGoodOutlinedIcon className='icon-style' />
                    <input readOnly className='pill-input' value={locationValue} placeholder="Select Location" />
                </div>
                <div className={`nav-pill search-pill`} ref={searchRef}>
                    <SearchOutlinedIcon className='search-btn-icon' onClick={handleManualSearch} />
                    <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleKeyDown} className="pill-input" placeholder="Search for 'AC Repair'..." />
                    {showSearchDropdown && (
                        <div className="search-dropdown">
                            {searchResults.length > 0 ? (
                                <div className="search-results-list">
                                    {searchResults.map((item) => (
                                        <div key={item._id} className="uc-suggestion-item" onClick={() => handleSelectService(item.category)}>
                                            <div className="uc-suggestion-title">{item.name}</div>
                                        </div>
                                    ))}
                                </div>
                            ) : (<div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>No results</div>)}
                        </div>
                    )}
                </div>
            </div>

            {/* 3. Right Icons */}
            <div className='Third-navbar'>
                <div className='nav-icon-item'><EventNoteIcon className='nav-icon' onClick={() => navigate("/booking")} /></div>
                <div className='nav-icon-item'><ShoppingCartOutlinedIcon className='nav-icon' onClick={() => navigate("/cart")} /></div>
                <div className='nav-icon-item profile-container' ref={profileRef} onClick={() => setShowProfileMenu(!showProfileMenu)}>
                    <AccountCircleIcon className='nav-icon' />
                    {user && <span style={{ marginLeft: '5px', fontWeight: 'bold', fontSize: '14px' }}>{user.name || "User"}</span>}

                    {showProfileMenu && (
                        <div className="profile-dropdown">
                            {user ? (
                                <>
                                    <div className="menu-item">My Profile</div>
                                    <div className="menu-item" onClick={handleLogout}>Logout</div>
                                </>
                            ) : (
                                <div className="menu-item" onClick={() => { setShowProfileMenu(false); setLoginOpen(true); setShowOtpInput(false); }}>Login / Sign Up</div>
                            )}
                            <div className="menu-item">Help Center</div>
                        </div>
                    )}
                </div>
            </div>

            {/* --- Location Modal (Same as before) --- */}
            {/* <Dialog open={locationOpen} onClose={() => setLocationOpen(false)} maxWidth="sm" fullWidth sx={{ "& .MuiPaper-root": { borderRadius: "16px", padding: "10px" } }}>
                <DialogContent>
                    <div className="location-dialog-header" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                        <KeyboardBackspaceIcon onClick={() => setLocationOpen(false)} sx={{ cursor: 'pointer', mr: 2 }} />
                        <input type='text' autoFocus className='pill-input' style={{ fontSize: '16px', width: '100%', border: 'none', outline: 'none' }} placeholder='Search society...' />
                    </div>
                </DialogContent>
            </Dialog> */}

            {/* --- LOGIN / OTP MODAL --- */}
            <Dialog open={loginOpen} onClose={() => setLoginOpen(false)} maxWidth="xs" fullWidth sx={{ "& .MuiPaper-root": { borderRadius: "16px", padding: "20px" } }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <CloseIcon onClick={() => setLoginOpen(false)} style={{ cursor: 'pointer' }} />
                </div>
                <DialogContent style={{ textAlign: 'center', paddingTop: '0' }}>

                    {!showOtpInput ? (
                        /* STEP 1: PHONE INPUT */
                        <>
                            <h2>Login / Sign up</h2>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '10px', marginTop: '20px' }}>
                                <span style={{ marginRight: '10px', fontWeight: 'bold' }}>+91</span>
                                <input type="tel" placeholder="Enter mobile number" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength="10" style={{ border: 'none', outline: 'none', flex: 1, fontSize: '16px' }} />
                            </div>
                            <button onClick={handleSendOtp} style={styles.primaryBtn} disabled={phone.length !== 10}>
                                Proceed
                            </button>
                        </>
                    ) : (
                        /* STEP 2: OTP INPUT */
                        <>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                <KeyboardBackspaceIcon onClick={() => setShowOtpInput(false)} style={{ cursor: 'pointer', position: 'absolute', left: '20px' }} />
                                <h2 style={{ margin: '0 auto' }}>Verify OTP</h2>
                            </div>
                            <p style={{ color: '#666', fontSize: '14px' }}>OTP sent to +91 {phone}</p>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                                {otp.map((data, index) => (
                                    <input
                                        className="otp-field"
                                        type="text"
                                        name="otp"
                                        maxLength="1"
                                        key={index}
                                        value={data}
                                        onChange={e => handleOtpChange(e.target, index)}
                                        onFocus={e => e.target.select()}
                                    />
                                ))}
                            </div>

                            <button onClick={handleVerifyOtp} style={styles.primaryBtn}>
                                Login
                            </button>
                        </>
                    )}

                </DialogContent>
            </Dialog>
        </div>
    );
}

// Inline Styles for simplicity
const styles = {
    primaryBtn: {
        width: '100%',
        padding: '12px',
        marginTop: '20px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold'
    }
};

export default Navbar;
