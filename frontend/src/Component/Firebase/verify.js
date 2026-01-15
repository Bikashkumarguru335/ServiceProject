// OTPLogin.js
import React, { useState } from 'react';
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from './otp';

const OTPLogin = () => {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);

    const setupRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            size: 'invisible',
            callback: () => console.log("Captcha verified")
        });
    };

    const sendOtp = async () => {
        setupRecaptcha();
        const appVerifier = window.recaptchaVerifier;
        try {
            const confirmation = await signInWithPhoneNumber(auth, `+91${phone}`, appVerifier);
            setConfirmationResult(confirmation);
            alert('OTP sent!');
        } catch (error) {
            console.error(error.message);
            alert(error.message);
        }
    };

    const verifyOtp = async () => {
        try {
            await confirmationResult.confirm(otp);
            alert('Phone number verified!');
        } catch (error) {
            console.error(error);
            alert('Invalid OTP');
        }
    };

    return (
        <div>
            <h2>OTP Login</h2>
            <input
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={sendOtp}>Send OTP</button>

            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={verifyOtp}>Verify OTP</button>

            <div id="recaptcha-container"></div>
        </div>
    );
};

export default OTPLogin;
