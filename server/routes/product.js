import express from "express";
import Product from "../models/Product.js"

const router = express.Router();

router.get("/products", async (req, res) => {
    try {
        const products = await Product.find()
        if (!products) {
            return res.status(404).json({ message : "No Product Found" });
        }
        return res.status(200).json(products);
    } catch (err) {
        console.error("Error on GET product route:", err.message);
        res.status(500).json({ message : "Internal Server Error" });
    }
})

export default router;