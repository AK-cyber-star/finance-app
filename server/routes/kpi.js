import express from "express";
import KPI from "../models/KPI.js"

const router = express.Router();

router.get("/kpis", async (req, res) => {
    try {
        const kpis = await KPI.find();

        if (!kpis) return res.status(404).json({ message: "No KPIs found" })

        return res.status(200).json(kpis);

    } catch (err) {
        console.error("ERROR in GET kpi route: ", err.message);
        res.status(404).json({ message: err.message })
    }
});

export default router;