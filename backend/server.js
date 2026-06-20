import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import expenseRoutes from "./routes/expenses.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoUri =
	process.env.MONGODB_URI || process.env.MONGO_URI || process.env.MONGO_URL;

app.use(
	cors({
		origin: process.env.FRONTEND_URL || "https://money-tracker-backend-kpa1.onrender.com",
	}),
);
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Money tracker API is running" });
});

app.use("/auth", authRoutes);
app.use("/expenses", expenseRoutes);

if (!mongoUri) {
	console.error("MONGODB_URI is missing in backend/.env");
	process.exit(1);
}

mongoose
	.connect(mongoUri)
	.then(() => {
		app.listen(PORT, () => {
			console.log("Server is running on https://money-tracker-backend-kpa1.onrender.com" + PORT);
		});
	})
	.catch(error => {
		console.error("MongoDB connection error:", error);
		process.exit(1);
	});
