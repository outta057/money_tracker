import express from "express";
import Expense from "../models/Expense.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
	try {
		const expenses = await Expense.find({ userId: req.userId }).sort({
			createdAt: -1,
		});
		res.json(expenses);
	} catch (error) {
		res.status(500).json({ message: "Failed to load expenses" });
	}
});

router.post("/", authMiddleware, async (req, res) => {
	try {
		const expense = await Expense.create({
			...req.body,
			userId: req.userId,
		});

		res.status(201).json(expense);
	} catch (error) {
		res.status(500).json({ message: "Failed to create expense" });
	}
});

export default router;
