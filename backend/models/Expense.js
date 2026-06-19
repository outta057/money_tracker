import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		amount: { type: Number, required: true },
		currency: { type: String, required: true },
		category: { type: String, required: true },
		description: String,
		date: { type: String, required: true },
	},
	{ timestamps: true },
);

export default mongoose.model("Expense", expenseSchema);
