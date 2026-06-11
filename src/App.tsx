
import ExpenseForm from './components/ExpenseForm.tsx'




function App() {
  return (
    <div className=' bg-black p-4 w-full h-screen text-white min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-black flex flex-col items-center gap-4'>

       <ExpenseForm />

      <div className='Секция с категориями расходов'>
      <section>
        <div>
          <h2> даты категорий</h2>
        </div>
      </section>
      </div>
      <div className='Секция с балансом'>
        <h2>Баланс</h2>
      </div>
      <button>выйти</button>
      <div className='Секция с записями о расходах'>
      <section>
        <div>
          <h2>Записи о расходах</h2>
        </div>
      </section>
      </div>
    </div>
  )
}

export default App