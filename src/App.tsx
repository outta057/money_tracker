import React from "react";
import CalendarDate from "./components/CalendarDate";
import ExitAcc from "./components/ExitAcc";
import ExpenseForm from "./components/ExpenseForm";
import StatisticOfDate from "./components/StatisticOfDate";
import TransactionList from "./components/TransactionList";
import type { Expense } from "./types/expense";
import type { Rates } from "./types/rates";



function App() {

	const [rates, setRates] = React.useState<Rates | null>(null);
		const [loading, setLoading] = React.useState(true);
		const [errorMessage, setError] = React.useState("");
	
		React.useEffect(() => {
			const fetchRates = async () => {
				try {
					const response = await fetch(
						"https://v6.exchangerate-api.com/v6/7697877099c4f61525c63d75/latest/USD",
					);
	
					const data = await response.json();
	
					setRates({
						data: data.time_last_update_utc,
						RON: data.conversion_rates.RON,
						EUR: data.conversion_rates.EUR,
					});
				} catch (errorMessage) {
					console.error(errorMessage);
					setError("Не удалось загрузить курсы");
				} finally {
					setLoading(false);
				}
			};
	
			fetchRates();
		}, []);


	const [viewMode, setViewMode] = React.useState<"all" | "period">("all");

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
		const expenseTime = new Date(expense.date).getTime();
		if (viewMode === "all") {
			return true;
		}
		if (filters.category !== "all" && expense.category !== filters.category) {
			return false;
		}

		if (!filters.from && !filters.to) {
			return false;
		}

		if (filters.category !== "all" && expense.category !== filters.category) {
			return false;
		}
		if (filters.from) {
			const fromTime = filters.from ? new Date(filters.from).getTime() : null;
			if (fromTime && expenseTime < fromTime) return false;
		}
		if (filters.to) {
			const toTime = filters.to ? new Date(filters.to).getTime() : null;
			if (toTime && expenseTime > toTime) return false;
		}
		return true;
	});

	const allExpenses = expenses;
	const statsExpenses = filteredExpenses;


	return (
		<div className="bg-[rgb(4,9,17)] pl-6 pr-6 pt-10 pb-10 w-full text-white min-h-screen flex flex-col items-center gap-4">
			<ExpenseForm
				rates={rates}
				loading = {loading}
				errorMessage = {errorMessage}
				onAddExpense={addExpense}
			/>

			<CalendarDate
				filters={filters}
				setFilters={setFilters}
				viewMode={viewMode}
				setViewMode={setViewMode}
			/>

			<StatisticOfDate expenses={statsExpenses} filters={filters} />

			<ExitAcc />

			<TransactionList expenses={allExpenses} />
		</div>
	);
}

export default App;
