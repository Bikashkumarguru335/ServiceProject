// frontend/src/PaymentComponent.js
import React, { useState, } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
const Payment = () => {
    const amount = useSelector((state) => state.cart?.totalAmount)

    const [paymentMethod, setPaymentMethod] = useState('ONLINE'); // 'ONLINE' or 'COD'
    const [loading, setLoading] = useState(false);

    // --- Helper: Load Razorpay Script dynamically ---
    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async () => {
        setLoading(true);

        try {
            // 1. Call Backend to Create Order
            const { data } = await axios.post('https://serviceproject-1-me4e.onrender.com/paymentApi/create-order', {
                amount,
                paymentMethod
            });

            // --- LOGIC FOR CASH ON DELIVERY ---
            if (paymentMethod === 'COD') {
                if (data.success) {
                    alert("Order Placed Successfully via Cash on Delivery!");
                }
                setLoading(false);
                return;
            }

            // --- LOGIC FOR ONLINE (UPI / CARD) ---
            if (paymentMethod === 'ONLINE') {
                const res = await loadRazorpayScript();
                if (!res) {
                    alert('Razorpay SDK failed to load. Are you online?');
                    setLoading(false);
                    return;
                }

                const options = {
                    key: data.key_id, // Enter the Key ID generated from the Dashboard
                    amount: data.order.amount,
                    currency: data.order.currency,
                    name: "My E-Commerce Store",
                    description: "Test Transaction",
                    order_id: data.order.id, // This is the Order ID generated from backend
                    handler: async function (response) {
                        // Success Callback: Verify payment on backend
                        const verifyRes = await axios.post('http://localhost:5000/paymentApi/verify-payment', {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        });

                        if (verifyRes.data.success) {
                            alert("Payment Successful! Order Placed.");
                        } else {
                            alert("Payment Verification Failed.");
                        }
                    },
                    prefill: {
                        name: "John Doe",
                        email: "john@example.com",
                        contact: "9999999999"
                    },
                    theme: {
                        color: "#6e42e5" // Urban Company Purple
                    }
                };

                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
                setLoading(false);
            }

        } catch (error) {
            console.error(error);
            alert("Something went wrong");
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Checkout</h2>

            <div style={styles.card}>
                <h3>Total Amount: ₹{amount}</h3>

                <div style={styles.options}>
                    <label style={styles.label}>
                        <input
                            type="radio"
                            value="ONLINE"
                            checked={paymentMethod === 'ONLINE'}
                            onChange={() => setPaymentMethod('ONLINE')}
                        />
                        Pay Online (UPI / Cards / Netbanking)
                    </label>

                    <label style={styles.label}>
                        <input
                            type="radio"
                            value="COD"
                            checked={paymentMethod === 'COD'}
                            onChange={() => setPaymentMethod('COD')}
                        />
                        Cash on Delivery (COD)
                    </label>
                </div>

                <button
                    onClick={handlePayment}
                    disabled={loading}
                    style={styles.button}
                >
                    {loading ? "Processing..." : paymentMethod === 'COD' ? "Place COD Order" : "Pay Now"}
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', fontFamily: 'sans-serif' },
    card: { padding: '20px', border: '1px solid #ccc', borderRadius: '10px', width: '300px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' },
    options: { display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0' },
    label: { cursor: 'pointer', fontSize: '14px' },
    button: { width: '100%', padding: '10px', backgroundColor: '#6e42e5', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }
};

export default Payment;
