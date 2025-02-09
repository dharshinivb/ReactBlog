import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; // Fix: Add DB connection
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//  Connect MongoDB
connectDB();

// Route Handling
app.use("/api", blogRoutes);

app.get("/", (req, res) => {
    res.send("API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
