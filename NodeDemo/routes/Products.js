// routes/product.js
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


// Validator middleware
const validateProduct = (req, res, next) => {
    // Thực hiện kiểm tra dữ liệu ở đây
    // Nếu dữ liệu hợp lệ, gọi next()
    // Nếu có lỗi, trả về res.status(400).json({ error: "Thông điệp lỗi" });
    next();
};

// Routes
router.post("/add", validateProduct, async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
