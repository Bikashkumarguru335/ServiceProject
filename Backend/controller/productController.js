const Item = require("../models/service")
module.exports.getProducts = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {

        res.status(500).json({ message: 'Server Error' }); yield
    }
};
module.exports.addData = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

// module.exports = { getProducts, addData };
