import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// подключение к Mongo
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB подключена"))
  .catch(err => console.log(err));


// ====== MODEL ======
const expenseSchema = new mongoose.Schema({
  amount: Number,
  currency: String,
  category: String,
  description: String,
  date: String,
});

const Expense = mongoose.model("Expense", expenseSchema);


// ====== ROUTES ======

// создать расход
app.post("/expenses", async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// получить все расходы
app.get("/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// запуск сервера
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});