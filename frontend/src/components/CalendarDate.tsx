import type { Filters } from "../types/filter";

type CalendarDateProps = {
	filters: Filters;
	setFilters: React.Dispatch<React.SetStateAction<Filters>>;
	viewMode: "all" | "period";
	setViewMode: React.Dispatch<React.SetStateAction<"all" | "period">>;
};

const CalendarDate: React.FC<CalendarDateProps> = ({
	filters,
	setFilters,
	viewMode,
	setViewMode,
}) => {
	return (
		<div className="p-4  w-full h-300px bg-[rgb(1,2,11)] rounded-xl display-block border border-gray-600 ">
			<section>
				<div className="flex gap-2 mb-4">
					<button
						onClick={() => setViewMode("all")}
						className={`px-3 py-1 rounded ${
							viewMode === "all"
								? "bg-blue-600 text-white"
								: "bg-gray-700 text-gray-300"
						}`}
					>
						Всё время
					</button>

					<button
						onClick={() => setViewMode("period")}
						className={`px-3 py-1 rounded ${
							viewMode === "period"
								? "bg-blue-600 text-white"
								: "bg-gray-700 text-gray-300"
						}`}
					>
						За период
					</button>
				</div>
				<div className="">
					<label className="flex flex-col gap-1 text-gray-500">С даты:</label>
					<div>
						<input
							type="date"
							value={filters.from}
							onChange={e =>
								setFilters(prev => ({
									...prev,
									from: e.target.value,
								}))
							}
							className="text-white p-2 w-full rounded-xl bg-[rgb(21,26,41)] border border-gray-600"
						/>
					</div>

					<label className="flex flex-col gap-1 text-gray-500">По дату:</label>
					<div>
						<input
							type="date"
							value={filters.to}
							onChange={e =>
								setFilters(prev => ({
									...prev,
									to: e.target.value,
								}))
							}
							className="text-white p-2 w-full rounded-xl bg-[rgb(21,26,41)] border border-gray-600"
						/>
					</div>
					<div className="flex items-end gap-4">
						<label className="flex flex-col gap-1 text-gray-500 flex-1">
							Категории
							<select
								aria-label="Категории расходов"
								value={filters.category}
								onChange={e =>
									setFilters(prev => ({
										...prev,
										category: e.target.value,
									}))
								}
								className="text-white p-2 rounded-xl bg-[rgb(21,26,41)] border border-gray-600"
							>
								<option value="all">Все категории</option>
								<option value="Без категории">Без категории</option>
								<option value="Еда">Еда</option>
								<option value="Транспорт">Транспорт</option>
								<option value="Развлечение">Развлечение</option>
								<option value="Комунальные услуги">Комунальные услуги</option>
								<option value="Здоровье">Здоровье</option>
								<option value="Образование">Образование</option>
								<option value="Покупки">Покупки</option>
								<option value="Другое">Другое</option>
							</select>
						</label>
						<button
							onClick={() => {
								setViewMode("all");
								setFilters({
									from: "",
									to: "",
									category: "all",
								});
							}}
							className="
						h-10 w-30  rounded-xl text-gray-500  border border-gray-600"
						>
							Сбросить
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CalendarDate;
