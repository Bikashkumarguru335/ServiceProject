import React, { useState, useEffect } from 'react'
import "./AdminLogin.css"
const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(60);
    const [isTimeOver, setIsTimeOver] = useState(false);

    useEffect(() => {
        let countdown;

        if (otpSent && timer > 0) {
            countdown = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }

        if (timer === 0) {
            setIsTimeOver(true);
            clearInterval(countdown);
        }

        return () => clearInterval(countdown);
    }, [otpSent, timer]);

    const handleSendOtp = (e) => {
        e.preventDefault();
        console.log("Sending OTP to:", email);
        setOtpSent(true);
        setTimer(60);
        setIsTimeOver(false);
        setOtp("");
        // Place API call here
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        if (isTimeOver) {
            alert("Time expired. Please resend OTP.");
            return;
        }

        console.log("Verifying OTP:", otp);
        if (otp === "123456") {
            alert("OTP Verified Successfully!");
        } else {
            alert("Invalid OTP!");
        }
    };

    const handleResendOtp = () => {
        console.log("Resending OTP to:", email);
        setTimer(60);
        setIsTimeOver(false);
        setOtp("");
        // Trigger resend logic (API)
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
                <h2>{otpSent ? "Verify OTP" : "Login with Email"}</h2>

                {!otpSent ? (
                    <>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Send OTP</button>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            maxLength="6"
                            disabled={isTimeOver}
                        />
                        <button type="submit" disabled={isTimeOver}>
                            Verify OTP
                        </button>
                        <p className="timer-text">
                            {isTimeOver ? (
                                <span className="expired">⏳ Time expired</span>
                            ) : (
                                `⏱ Time left: ${timer}s`
                            )}
                        </p>
                        {isTimeOver && (
                            <button type="button" className="resend-btn" onClick={handleResendOtp}>
                                Resend OTP
                            </button>
                        )}
                    </>
                )}
            </form>
        </div>
    );

}

export default AdminLogin