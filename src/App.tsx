import React from "react";
import CalendarDate from "./components/CalendarDate";
import ExitAcc from "./components/ExitAcc";
import ExpenseForm from "./components/ExpenseForm";
import StatisticOfDate from "./components/StatisticOfDate";
import TransactionList from "./components/TransactionList";

type Expense = {
  amount: string;
  category: string;
  description?: string;
};

function App() {
  const [expenses, setExpenses] = React.useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <div className="bg-[rgb(4,9,17)] pl-6 pr-6 pt-10 pb-10 w-full text-white min-h-screen flex flex-col items-center gap-4">

      <ExpenseForm onAddExpense={addExpense} />

      <CalendarDate />

      <StatisticOfDate expenses={expenses} />

      <ExitAcc />

      <TransactionList expenses={expenses} />

    </div>
  );
}

export default App;