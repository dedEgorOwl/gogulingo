import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

import router from "./router/index.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);

        app.listen(process.env.PORT, () => {
            console.log(`Server started on PORT = ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
