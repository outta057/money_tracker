import React from "react";
import type { Expense } from "../types/expense";
import type { Rates } from "../types/rates";

type Props = {
	onAddExpense: (expense: Expense) => void;
	rates: Rates | null;
	loading: boolean;
	errorMessage: string;
};

const ExpenseForm: React.FC<Props> = ({
	onAddExpense,
	rates,
	loading,
	errorMessage,
}) => {


	
	const numberButtons: number[] = [20, 25, 50, 75, 100, 150, 200, 250, 300];

	const currencyOptions: string[] = ["L", "$", "€"];

	const [currency, setCurrency] = React.useState<string>("");
	const handleCurrencyClick = (currency: string): void => {
		setCurrency(currency);
	};

	const [amount, setAmount] = React.useState<string>("");
	const handleAmountClick = (number: number): void => {
		setAmount(String(number));
	};

	const categoryOptions: string[] = [
		"Без категории",
		"Еда",
		"Транспорт",
		"Развлечение",
		"Комунальные услуги",
		"Здоровье",
		"Образование",
		"Покупки",
		"Другое",
	];
	const [category, setCategory] = React.useState<string>("Без категории");

	const [description, setDescription] = React.useState<string>("");

	const [error, setError] = React.useState<string>("");

	const handleAddExpense = (): void => {
		if (!amount) {
			setError("Введите сумму");
			return;
		}

		if (!currency) {
			setError("Выберите валюту");
			return;
		}

		setError("");

		const expense: Expense = {
			amount: Number(amount),
			currency,
			category,
			description,
			date: new Date().toISOString().split("T")[0],
		};
		onAddExpense(expense);
		setAmount("");
		setCategory("Без категории");
		setDescription("");
		setCurrency("");
	};

	return (
		<>
			<div className="container_money_track p-4  w-full h-300px bg-[rgb(1,2,11)] rounded-xl display-block border border-gray-600 ">
				<section className="money_track">
					<div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
						<div className="relative w-full">
							<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
								{currency || ""}
							</span>

							<input
								className="w-full h-10 pl-10 pr-4 border rounded-xl bg-[rgb(21,26,41)] border-gray-600 text-white"
								placeholder="0.00"
								value={amount}
								onChange={e => setAmount(e.target.value)}
							/>
						</div>

						{currencyOptions.map(currencyOption => {
							const isActive = currency === currencyOption;

							return (
								<button
									key={currencyOption}
									onClick={() => handleCurrencyClick(currencyOption)}
									className={`h-10 w-30 rounded-xl border ${
										isActive
											? "bg-[rgb(28,41,87)] border-blue-500 text-white"
											: "bg-[rgb(21,26,41)] border-gray-600 text-gray-400"
									}`}
								>
									{currencyOption}
								</button>
							);
						})}

						{error && <p className="text-red-500 text-sm">{error}</p>}

						<button
							onClick={handleAddExpense}
							className="h-10 w-30  rounded-xl text-white bg-[rgb(28,41,87)] border border-gray-600"
						>
							+
						</button>
					</div>

					<div className="grid grid-cols-3 gap-2  p-0 rounded-xl  ">
						{numberButtons.map(number => (
							<button
								key={number}
								className="h-10 rounded-xl bg-[rgb(21,26,41)] border border-gray-600"
								onClick={() => handleAmountClick(number)}
							>
								{number}
							</button>
						))}
					</div>

					<div className="	flex flex-col gap-4 mt-4">
						<label className="flex flex-col gap-1 text-gray-500">
							Категории
							<select
								value={category}
								onChange={e => setCategory(e.target.value)}
								aria-label="Категории расходов"
								className="text-white p-2 rounded-xl bg-[rgb(21,26,41)] border border-gray-600"
							>
								{categoryOptions.map(category => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</select>
						</label>

						<label className="flex flex-col gap-1 text-gray-500">
							Описание
							<input
								type="text"
								placeholder="Необязательно"
								maxLength={100}
								value={description}
								onChange={e => setDescription(e.target.value)}
								className="text-white p-2 rounded-xl bg-[rgb(21,26,41)] border border-gray-600"
							/>
						</label>
						{loading && (
							<p className="text-sm text-gray-500">Загрузка курсов...</p>
						)}

						{errorMessage && (
							<p className="text-sm text-red-500">{errorMessage}</p>
						)}

						{rates && (
							<p className="text-sm text-gray-500">
								{rates
									? `Курс: 1 USD = ${rates.RON} RON , 1 USD = ${rates.EUR} EUR (Актуальный курс на ${rates.data} UTC)`
									: " Загрузка курсов..."}
							</p>
						)}
					</div>
				</section>
			</div>
		</>
	);
};

export default ExpenseForm;
