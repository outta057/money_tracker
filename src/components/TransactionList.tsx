import React from "react";
import type { Expense } from "../types/expense";



type Props = {
	expenses: Expense[];
};

const TransactionList: React.FC<Props> = ({ expenses }) => {
	return (
		<div className="  w-full h-auto bg-[rgb(19,22,32)] rounded-xl display-block border border-gray-600 ">
			<section className="h-auto w-auto p-6 mb-6">
				<h2 className="flex items-left mb-4 text-white">Записи</h2>

				{expenses.length === 0 ? (
					<p className="flex text-sm items-center pl-4 pr-4 pt-8 pb-8 text-gray-500">
						Нет записей за выбранный период и фильтры - измените даты или
						добавьте расход.
					</p>
				) : (
					expenses.map((expense, index) => (
						<div
							key={index}
							className="flex justify-between border-b border-gray-700 py-2"
						>
							<span>
								{expense.amount} {expense.currency} - {expense.category}
							</span>

							{expense.description && (
								<span className="text-gray-400 text-sm">
									{expense.description}
								</span>
							)}
						</div>
					))
				)}
			</section>
		</div>
	);
};

export default TransactionList;
