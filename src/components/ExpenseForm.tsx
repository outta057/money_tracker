const ExpenseForm = () => {
	return (
		<>
			<div className="container_money_track p-4  w-full h-300px bg-[rgb(1,2,11)] rounded-xl display-block border border-gray-600 ">
				<section className="money_track">
					<div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
						<input
							className="w-full h-10 p-4  border rounded-xl bg-[rgb(21,26,41)] border-gray-600 text-white"
							placeholder="0.00"
						/>
						<button className="h-10 w-30 rounded-xl bg-[rgb(21,26,41)] border border-gray-600">
							L
						</button>
						<button className="h-10 w-30 rounded-xl bg-[rgb(21,26,41)] border border-gray-600">
							$
						</button>
						<button className="h-10 w-30 rounded-xl bg-[rgb(21,26,41)] border border-gray-600">
							€
						</button>
						<button className="h-10 w-30  rounded-xl text-white bg-[rgb(28,41,87)] border border-gray-600">
							+
						</button>
					</div>

					<div className="grid grid-cols-3 gap-2  p-0 rounded-xl  ">
						<button className="h-10 rounded-xl bg-[rgb(21,26,41)] border border-gray-600">
							20
						</button>
						<button className="h-10 rounded-xl bg-[rgb(21,26,41)] border border-gray-600">
							25
						</button>
						<button className="h-10 rounded-xl bg-[rgb(21,26,41)] border border-gray-600">
							50
						</button>
						<button className="h-10 rounded-xl bg-[rgb(21,26,41)] border border-gray-600">
							75
						</button>
						<button className="h-10 rounded-xl bg-[rgb(21,26,41)] border border-gray-600">
							100
						</button>
						<button className="h-10 rounded-xl bg-[rgb(21,26,41)] border border-gray-600">
							150
						</button>
						<button className="h-10 rounded-xl bg-[rgb(21,26,41)] border border-gray-600">
							200
						</button>
						<button className="h-10 rounded-xl bg-[rgb(21,26,41)] border border-gray-600">
							250
						</button>
						<button className="h-10 rounded-xl  bg-[rgb(21,26,41)] border border-gray-600">
							300
						</button>
					</div>

					<div className="	flex flex-col gap-4 mt-4">
						<label className="flex flex-col gap-1 text-gray-500">
							Категории
							<select
								aria-label="Категории расходов"
								className="text-white p-2 rounded-xl bg-[rgb(21,26,41)] border border-gray-600"
							>
								<option value="Без категории">Без категории</option>
								<option value="food">Еда</option>
								<option value="transport">Транспорт</option>
								<option value="entertainment">Развлечения</option>
								<option value="utilities">Коммунальные услуги</option>
								<option value="health">Здоровье</option>
								<option value="education">Образование</option>
								<option value="shopping">Покупки</option>
								<option value="other">Другое</option>
							</select>
						</label>

						<label className="flex flex-col gap-1 text-gray-500">
							Описание
							<input
								type="text"
								placeholder="Необязательно"
								maxLength={100}
								className="text-white p-2 rounded-xl bg-[rgb(21,26,41)] border border-gray-600"
							/>
						</label>

						<p className="text-sm text-gray-500">
							Курс: 1 USD = 4.6 RON, 1 USD = 0.85 EUR (fallback от 02.06.2026).
						</p>
					</div>
				</section>
			</div>
		</>
	);
};

export default ExpenseForm;
