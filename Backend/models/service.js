const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true }, // Common to all
    category: { type: String, required: true, index: true }, // e.g., "Service", "Product"
    description: { type: String },
    image: {
        type: String,
        required: true
    },
    price: { type: Number },

    // THE MAGIC PART: This field can store ANYTHING (Object, Array, String)
    attributes: { type: mongoose.Schema.Types.Mixed },

    // For fast searching later
    keywords: [String]
}, { timestamps: true });

// Create a Text Index for basic search (we will upgrade this later)
itemSchema.index({ name: 'text', description: 'text', 'attributes.brand': 'text' });

module.exports = mongoose.model('Item', itemSchema);