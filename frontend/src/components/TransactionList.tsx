import React from "react";
import type { Expense } from "../types/expense";
import { useState } from "react";
type Props = {
	expenses: Expense[];
};

const TransactionList: React.FC<Props> = ({ expenses }) => {

	const [currentPage, setCurrentPage] = useState(1);

const itemsPerPage = 7;

const totalPages = Math.ceil(expenses.length / itemsPerPage);

const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

const currentExpenses = expenses.slice(startIndex, endIndex);



	return (
		<div className="  w-full h-auto bg-[rgb(19,22,32)] rounded-xl display-block border border-gray-600 ">
			<section className="h-auto w-auto p-6 mb-6">
				<h2 className="flex items-left mb-4 text-white">Записи</h2>

				{expenses.length === 0 ? (
					<p className="flex text-sm items-center pl-4 pr-4 pt-8 pb-8 text-gray-500">
						Нет записей -
						добавьте расход.
					</p>
				) : (
					currentExpenses.map((expense, index) => (
						<div
							key={index}
							className="flex justify-between border-b border-gray-700 py-2"
						>
							<div className="flex flex-col">
								<span>
									{expense.amount} {expense.currency} - {expense.category}
								</span>

								<span className="text-xs text-gray-500">{expense.date}</span>
							</div>

							{expense.description && (
								<span className="text-gray-400 text-sm">
									{expense.description}
								</span>
							)}
						</div>
					))
				)}

				{totalPages > 1 && (
	<div className="flex justify-center gap-2 mt-4">
		<button
			onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
			disabled={currentPage === 1}
			className="px-3 py-1 border rounded disabled:opacity-50"
		>
			←
		</button>

		{Array.from({ length: totalPages }, (_, i) => (
			<button
				key={i}
				onClick={() => setCurrentPage(i + 1)}
				className={`px-3 py-1 border rounded ${
					currentPage === i + 1
						? "bg-blue-500 text-white"
						: "text-gray-300"
				}`}
			>
				{i + 1}
			</button>
		))}

		<button
			onClick={() =>
				setCurrentPage((prev) => Math.min(prev + 1, totalPages))
			}
			disabled={currentPage === totalPages}
			className="px-3 py-1 border rounded disabled:opacity-50"
		>
			→
		</button>
	</div>
)}
			</section>
		</div>
	);
};

export default TransactionList;
