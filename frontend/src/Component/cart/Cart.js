import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/cartSlice"; // Update path if needed
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Ensure this is installed
import './Cart.css'; // Assuming you have a CSS file, or use inline styles

const Cart = () => {
    // FIX: Select 'items' and 'totalAmount' correctly
    const cartItems = useSelector((state) => state.cart?.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleProceedToPayment = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        // Navigate to /payment and pass data in 'state'
        navigate('/payment', {
            state: {
                cartItems: cartItems,
                totalAmount: totalAmount
            }
        });
    };

    return (
        <div className="cart-container" style={{ padding: "20px" }}>

            {/* Header / Back Button */}
            <div className="cart-header" style={{ marginBottom: "20px" }}>
                <ArrowBackIcon
                    onClick={() => navigate("/")}
                    sx={{ fontSize: "30px", cursor: "pointer" }}
                />
                <h2>My Cart</h2>
            </div>

            {cartItems.length === 0 ? (
                // EMPTY STATE
                <div className='empty-cart' style={{ textAlign: "center", marginTop: "50px" }}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                        alt="Empty Cart"
                        style={{ width: "150px" }}
                    />
                    <div className="otherDetails">
                        <h2>Your cart is empty</h2>
                        <p>Let's add some services</p>
                        <button
                            className="explore-button"
                            onClick={() => navigate("/")}
                            style={{ padding: "10px 20px", marginTop: "10px", background: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
                        >
                            Explore services
                        </button>
                    </div>
                </div>
            ) : (
                // CART ITEMS LIST
                <div className="cart-content">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="cart-item"
                            style={{
                                display: "flex",
                                justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ddd",
                                padding: "15px 0"
                            }}
                        >
                            {/* Product Info */}
                            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                <img src={item.image} alt={item.name} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }} />
                                <div>
                                    <h4 style={{ margin: "0 0 5px 0" }}>{item.name}</h4>
                                    <p style={{ margin: 0, color: "#666" }}>Unit Price: ₹{item.price}</p>
                                    <p style={{ margin: 0, fontWeight: "bold" }}>Total: ₹{item.price * item.quantity}</p>
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="actions" style={{ display: "flex", flexDirection: "column", alignItems: "end", gap: "10px" }}>
                                <div className="quantity-controls" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#f5f5f5", padding: "5px 10px", borderRadius: "20px" }}>
                                    <button
                                        onClick={() => dispatch(decreaseQuantity(item.id))}
                                        style={{ border: "none", background: "transparent", fontWeight: "bold", cursor: "pointer", fontSize: "18px" }}
                                    >-</button>

                                    <span style={{ fontWeight: "bold" }}>{item.quantity}</span>

                                    <button
                                        onClick={() => dispatch(increaseQuantity(item.id))}
                                        style={{ border: "none", background: "transparent", fontWeight: "bold", cursor: "pointer", fontSize: "18px" }}
                                    >+</button>
                                </div>

                                <button
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    style={{ color: "red", background: "transparent", border: "none", cursor: "pointer", fontSize: "12px", textDecoration: "underline" }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* TOTAL SECTION */}
                    <div className="cart-summary" style={{ marginTop: "30px", borderTop: "2px solid #eee", paddingTop: "20px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "18px", fontWeight: "bold" }}>
                            <span>Total Amount:</span>
                            <span>₹{totalAmount}</span>
                        </div>
                        <button
                            style={{ width: "100%", padding: "15px", background: "#28a745", color: "white", border: "none", borderRadius: "8px", marginTop: "20px", fontSize: "16px", cursor: "pointer" }}
                            onClick={handleProceedToPayment}
                        >
                            Proceed to Checkout (₹{totalAmount})
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;