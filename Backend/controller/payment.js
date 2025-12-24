// const Order = require("../models/orderModel")
// const razorpay = require('razorpay');
// const dotenv = require('dotenv');
// dotenv.config();

// exports.createOrder = async (req, res) => {
//     const { amount, paymentMethod } = req.body;

//     try {
//         // CASE 1: Cash on Delivery
//         if (paymentMethod === 'COD') {
//             const newOrder = new Order({
//                 amount,
//                 currency: "INR",
//                 paymentMethod: 'COD',
//                 paymentStatus: 'Pending', // COD is pending until delivered
//             });
//             await newOrder.save();
//             return res.json({ success: true, message: "COD Order Placed", order: newOrder });
//         }

//         // CASE 2: Online Payment (Card/UPI via Razorpay)
//         // Razorpay expects amount in PAISA (multiply by 100)
//         const options = {
//             amount: amount * 100,
//             currency: "INR",
//             receipt: "receipt_" + Date.now(),
//         };

//         const razorpayOrder = await razorpay.orders.create(options);

//         // Save initial record to DB
//         const newOrder = new Order({
//             amount,
//             currency: "INR",
//             paymentMethod: 'ONLINE',
//             paymentStatus: 'Pending',
//             razorpayOrderId: razorpayOrder.id
//         });
//         await newOrder.save();

//         // Send Key ID and Order details to Frontend
//         res.json({
//             success: true,
//             key_id: process.env.RAZORPAY_KEY_ID,
//             order: razorpayOrder,
//         });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// };

// // Route B: Verify Online Payment (Called after Razorpay success)
// exports.verifyPayment = async (req, res) => {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//     // Verify Signature to ensure payment is genuine
//     const body = razorpay_order_id + "|" + razorpay_payment_id;

//     const expectedSignature = crypto
//         .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
//         .update(body.toString())
//         .digest('hex');

//     const isAuthentic = expectedSignature === razorpay_signature;

//     if (isAuthentic) {
//         // Update DB to 'Paid'
//         await Order.findOneAndUpdate(
//             { razorpayOrderId: razorpay_order_id },
//             { paymentStatus: 'Paid' }
//         );
//         res.json({ success: true, message: "Payment Verified" });
//     } else {
//         res.json({ success: false, message: "Payment Failed" });
//     }
// }
const Order = require("../models/orderModel");
const Razorpay = require('razorpay');
const crypto = require('crypto'); // <--- ADDED THIS (Required for verification)
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// 2. DEBUGGING: Print keys to console to check if they exist
console.log("-----------------------------------------");
console.log("Debug: Razorpay Key ID:", process.env.RAZORPAY_KEY_ID);
console.log("Debug: Razorpay Key Secret:", process.env.RAZORPAY_KEY_SECRET ? "Exists" : "Missing");
console.log("-----------------------------------------");

// <--- ADDED THIS (Initialize Razorpay Instance)
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

exports.createOrder = async (req, res) => {
    const { amount, paymentMethod } = req.body;

    try {
        // CASE 1: Cash on Delivery
        if (paymentMethod === 'COD') {
            const newOrder = new Order({
                amount,
                currency: "INR",
                paymentMethod: 'COD',
                paymentStatus: 'Pending', // COD is pending until delivered
            });
            await newOrder.save();
            return res.json({ success: true, message: "COD Order Placed", order: newOrder });
        }

        // CASE 2: Online Payment (Card/UPI via Razorpay)
        // Razorpay expects amount in PAISA (multiply by 100)
        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: "receipt_" + Date.now(),
        };

        // Now using the initialized 'razorpay' instance
        const razorpayOrder = await razorpay.orders.create(options);

        // Save initial record to DB
        const newOrder = new Order({
            amount,
            currency: "INR",
            paymentMethod: 'ONLINE',
            paymentStatus: 'Pending',
            razorpayOrderId: razorpayOrder.id
        });
        await newOrder.save();

        // Send Key ID and Order details to Frontend
        res.json({
            success: true,
            key_id: process.env.RAZORPAY_KEY_ID,
            order: razorpayOrder,
        });

    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Route B: Verify Online Payment (Called after Razorpay success)
exports.verifyPayment = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    try {
        // Verify Signature to ensure payment is genuine
        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Update DB to 'Paid'
            await Order.findOneAndUpdate(
                { razorpayOrderId: razorpay_order_id },
                { paymentStatus: 'Paid' }
            );
            res.json({ success: true, message: "Payment Verified" });
        } else {
            res.status(400).json({ success: false, message: "Payment Verification Failed" });
        }
    } catch (error) {
        console.error("Error verifying payment:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}