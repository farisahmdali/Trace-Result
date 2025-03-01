import express from "express";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import connectDB from "./db.js";
import path from "path";
import morgan from "morgan";
import studentRoutes from "../routes/studentRoutes.js";

dotenv.config();
connectDB();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add this line to serve static files
app.use(express.static(path.join(__dirname, "../../public")));

app.use(morgan("dev"));

// Routes
app.use("/students", studentRoutes);
app.use("/", (req, res) => res.redirect("/students"));

export default app;
