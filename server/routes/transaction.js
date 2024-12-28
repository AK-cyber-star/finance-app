import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/transactions", async (req, res) => {
    try {
        const transactions = await Transaction.find()
            .limit(50)
            .sort({ createdOn: -1 }); // -1 means latest (sorting by latest)

        if (!transactions) {
            return res.status(404).json({ message: "No Transaction Found" });
        }

        return res.status(200).json(transactions);

    } catch (err) {
        console.log("ERROR on GET transaction route.");
        res.status(500).json({ message: "Internal Server Error" });
    }
})

export default router;