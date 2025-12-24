const Cart = require('../models/cart');
// const Product = require('../models/productController');

// Add product to cart
exports.addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, products: [{ productId, quantity }] });
        } else {
            const itemIndex = cart.products.findIndex(p => p.productId.toString() === productId);

            if (itemIndex > -1) {
                cart.products[itemIndex].quantity += quantity;
            } else {
                cart.products.push({ productId, quantity });
            }
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Remove product from cart
exports.removeFromCart = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        cart.products = cart.products.filter(p => p.productId.toString() !== productId);

        await cart.save();
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
