const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    amount: Number,
    currency: String,
    paymentMethod: String, // 'ONLINE' or 'COD'
    paymentStatus: String, // 'Pending', 'Paid', 'Failed'
    razorpayOrderId: String, // Only for online
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);

