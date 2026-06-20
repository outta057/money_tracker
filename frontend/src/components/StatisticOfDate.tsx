import React from "react";
import type { Expense } from "../types/expense";

type Props = {
	expenses: Expense[];
	filters: {
		from: string;
		to: string;
	}
};

const StatisticOfDate: React.FC<Props> = ({ expenses, filters }) => {

const totals = expenses.reduce((acc, expense) => {
	const { currency, amount } = expense;

	acc[currency] = (acc[currency] || 0) + amount;

	return acc;
}, {} as Record<string, number>);



	return (
		<div className="w-full h-auto bg-[rgb(21,26,41)] rounded-xl border border-gray-600">
			<div className="flex p-6 text-sm text-gray-500">
				<div className="flex flex-col gap-4 text-white">

					<p className="text-gray-500">
						Всего записей: {expenses.length} 
					</p>

					<p>
						Период дат: {filters.from || "-"} по {filters.to || "-"} 
					</p>

					<div className="flex flex-col gap-1 text-base">
						<span>L - {(totals["L"] || 0).toFixed(2)}</span>
						<span>$ - {(totals["$"] || 0).toFixed(2)}</span>
						<span>€ - {(totals["€"] || 0).toFixed(2)}</span>
					</div>

				</div>
			</div>
		</div>
	);
};

export default StatisticOfDate;