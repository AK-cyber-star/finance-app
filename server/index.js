import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";

import path from "path";

import kpiRoutes from "./routes/kpi.js"
import productRoute from "./routes/product.js"
import transactionRoute from "./routes/transaction.js"

import KPI from "./models/KPI.js";
import Product from "./models/Product.js"
import Transaction from "./models/Transaction.js";

import { kpis, products, transactions } from "./data/data.js";

// configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

const __dirname = path.resolve();

// ROUTES
app.use("/kpi", kpiRoutes);
app.use("/product", productRoute);
app.use("/transaction", transactionRoute);

if (process.env.NODE_ENV==="production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
    })
}

// MONGOOSE SETUP
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MOGODB_CONNECTTION_URL)
.then(async () => {
    console.log("Database connected!");

    // ADD DATA ONE TIME ONLY OR AS NEEDED
    // await mongoose.connection.db.dropDatabase(); 
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // Transaction.insertMany(transactions);

    app.listen(PORT, () => {
        console.log(`Server Port: ${PORT}`);
    })
})
.catch((error) => console.log("ERROR:", error));