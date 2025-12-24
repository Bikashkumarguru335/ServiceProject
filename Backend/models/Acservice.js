// // models/Product.js
// const mongoose = require('mongoose');

// const acServiceSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     reviews: {
//         rating: {
//             type: Number,
//             required: true,
//         },
//         count: {
//             type: String, // e.g., "1.4M reviews"
//             required: true,
//         },
//     },
//     price: {
//         original: {
//             type: Number,
//             required: true,
//         },
//         discounted: {
//             type: Number,
//             required: true,
//         },
//     },
//     duration: {
//         type: String,
//         required: true,
//     },
//     perUnitPrice: {
//         type: String, // e.g., "₹549 per AC"
//         required: true,
//     },
//     description: {
//         type: [String], // list of bullet points
//         default: [],
//     },
//     imageUrl: {
//         type: String, // optional image URL
//     },
//     quantityPack: {
//         type: Number, // e.g., 2 for "2 ACs"
//         required: true,
//     }
// }, {
//     timestamps: true
// });

// module.exports = mongoose.model('AcService', acServiceSchema);
