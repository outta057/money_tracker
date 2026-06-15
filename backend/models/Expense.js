import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  amount: Number,
  currency: String,
  category: String,
  description: String,
  date: String,
});

export const Expense = mongoose.model("Expense", expenseSchema);