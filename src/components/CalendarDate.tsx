
const CalendarDate = () => {
	return (
		<div className="p-4  w-full h-300px bg-[rgb(1,2,11)] rounded-xl display-block border border-gray-600 ">
      <section>
        <div className="">
          <label className="flex flex-col gap-1 text-gray-500">С даты:</label>
					<div> 
          <input type="date" className="text-white p-2 w-full rounded-xl bg-[rgb(21,26,41)] border border-gray-600" />
					</div>

					<label className="flex flex-col gap-1 text-gray-500">По дату:</label>
					<div> 
          <input type="date" className="text-white p-2 w-full rounded-xl bg-[rgb(21,26,41)] border border-gray-600" />
					</div>
					<div className = "flex items-end gap-4"> 
					<label className="flex flex-col gap-1 text-gray-500 flex-1">
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
						<button className="h-10 w-30  rounded-xl text-gray-500  border border-gray-600">
							Сбросить
						</button>
						</div>
					</div>
				</section>
			</div>
	)
}

export default CalendarDate