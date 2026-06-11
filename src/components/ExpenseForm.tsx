
const ExpenseForm = () => {
	return (
		<><div className='container_money_track p-4  w-full h-300px bg-[rgb(24,28,38)] rounded-lg display-block'>
      <section className='money_track'>
        <div className="flex items-center gap-4 mb-4">
      <input className="w-0px h-44px  p-0px-10px br-8px  border rounded-lg " placeholder="0.00" />
      <button>L</button>
      <button>$</button>
      <button>€</button>
      <button>+</button>
      </div>

<div className="grid grid-cols-3 gap-2">
  <button className="button_price_number">20</button>
  <button className="button_price_number">25</button>
  <button className="button_price_number">50</button>
  <button className="button_price_number">75</button>
  <button className="button_price_number">100</button>
  <button className="button_price_number">150</button>
  <button className="button_price_number">200</button>
  <button className="button_price_number">250</button>
  <button className="button_price_number">300</button>
</div>






      <div className = 'Categories_tracker'>
<label >Категории
  <select aria-label="Категории расходов" className="">
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

<label>Описание
  <input type="text" placeholder="Необязательно" />
</label>

<p>Курс: 1 USD = 4.6 RON, 1 USD = 0.85 EUR (fallback от 02.06.2026).</p>

      </div>
      </section>
      </div>
      
      
      </>
	)
}

export default ExpenseForm