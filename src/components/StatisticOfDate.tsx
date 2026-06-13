import React from "react";
import type { Expense } from "../types/expense";

type Props = {
	expenses: Expense[];
};

const StatisticOfDate: React.FC<Props> = ({ expenses }) => {

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
						Затраты с: 01.06.2026 по: 11.06.2026
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