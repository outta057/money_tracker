import React from "react";
import { API_URL } from "./api";
import CalendarDate from "./components/CalendarDate";
import ExitAcc from "./components/ExitAcc";
import ExpenseForm from "./components/ExpenseForm";
import StatisticOfDate from "./components/StatisticOfDate";
import TransactionList from "./components/TransactionList";
import type { Expense } from "./types/expense";
import type { Rates } from "./types/rates";

type AppProps = {
	token: string;
	onLogout: () => void;
};

function App({ token, onLogout }: AppProps) {
	const [rates, setRates] = React.useState<Rates | null>(null);
	const [loading, setLoading] = React.useState(true);
	const [errorMessage, setError] = React.useState("");
	const [expenseErrorMessage, setExpenseErrorMessage] = React.useState("");
	const [viewMode, setViewMode] = React.useState<"all" | "period">("all");
	const [expenses, setExpenses] = React.useState<Expense[]>([]);
	const [filters, setFilters] = React.useState({
		from: "",
		to: "",
		category: "all",
	});

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
			} catch (error) {
				console.error(error);
				setError("Не удалось загрузить курсы");
			} finally {
				setLoading(false);
			}
		};

		fetchRates();
	}, []);

	React.useEffect(() => {
		const fetchExpenses = async () => {
			try {
				const res = await fetch(API_URL + "/expenses", {
					headers: {
						Authorization: "Bearer " + token,
					},
				});

				if (!res.ok) {
					throw new Error("Failed to load expenses");
				}

				const data = (await res.json()) as Expense[];
				setExpenses(data);
				setExpenseErrorMessage("");
			} catch {
				setExpenseErrorMessage("Не удалось загрузить расходы");
			}
		};

		fetchExpenses();
	}, [token]);

	const addExpense = async (expense: Expense) => {
		try {
			const res = await fetch(API_URL + "/expenses", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + token,
				},
				body: JSON.stringify(expense),
			});

			if (!res.ok) {
				throw new Error("Failed to add expense");
			}

			const createdExpense = (await res.json()) as Expense;
			setExpenses(prev => [createdExpense, ...prev]);
			setExpenseErrorMessage("");
		} catch {
			setExpenseErrorMessage("Не удалось сохранить расход");
		}
	};

	const statsExpenses = expenses.filter(expense => {
		if (viewMode === "all") return true;

		const expenseTime = new Date(expense.date).getTime();

		if (filters.category !== "all" && expense.category !== filters.category) {
			return false;
		}

		if (filters.from) {
			const fromTime = new Date(filters.from).getTime();
			if (expenseTime < fromTime) return false;
		}

		if (filters.to) {
			const toTime = new Date(filters.to).getTime();
			if (expenseTime > toTime) return false;
		}

		return true;
	});

	return (
		<div className="bg-[rgb(4,9,17)] pl-6 pr-6 pt-10 pb-10 w-full text-white min-h-screen flex flex-col items-center gap-4">
			<ExpenseForm
				rates={rates}
				loading={loading}
				errorMessage={errorMessage}
				onAddExpense={addExpense}
			/>

			{expenseErrorMessage && (
				<p className="w-full text-sm text-red-500">{expenseErrorMessage}</p>
			)}

			<CalendarDate
				filters={filters}
				setFilters={setFilters}
				viewMode={viewMode}
				setViewMode={setViewMode}
			/>

			<StatisticOfDate expenses={statsExpenses} filters={filters} />
			<ExitAcc onLogout={onLogout} />
			<TransactionList expenses={viewMode === "all" ? expenses : statsExpenses} />
		</div>
	);
}

export default App;
