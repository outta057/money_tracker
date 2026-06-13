import React from "react";
import CalendarDate from "./components/CalendarDate";
import ExitAcc from "./components/ExitAcc";
import ExpenseForm from "./components/ExpenseForm";
import StatisticOfDate from "./components/StatisticOfDate";
import TransactionList from "./components/TransactionList";
import type { Expense } from "./types/expense";

function App() {
	const [expenses, setExpenses] = React.useState<Expense[]>([]);

	const addExpense = (expense: Expense) => {
		setExpenses(prev => [...prev, expense]);
	};
	const [filters, setFilters] = React.useState({
		from: "",
		to: "",
		category: "all",
	});

	const filteredExpenses = expenses.filter(expense => {
		// фильтр по категории
		if (filters.category !== "all" && expense.category !== filters.category) {
			return false;
		}

		// фильтр по дате (пока заглушка, добавим позже)
		return true;
	});

	return (
    
		<div className="bg-[rgb(4,9,17)] pl-6 pr-6 pt-10 pb-10 w-full text-white min-h-screen flex flex-col items-center gap-4">
      <pre>{JSON.stringify(filters, null, 2)}</pre>
			<ExpenseForm onAddExpense={addExpense} />

			<CalendarDate filters={filters} setFilters={setFilters} />

			<StatisticOfDate expenses={filteredExpenses} />

			<ExitAcc />

			<TransactionList expenses={expenses} />
		</div>
	);
}

export default App;
