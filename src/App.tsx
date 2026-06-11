
import ExpenseForm from './components/ExpenseForm'
import CalendarDate from './components/CalendarDate'
import StatisticOfDate from './components/StatisticOfDate'
import ExitAcc from './components/ExitAcc'
import NotionOfDate from './components/NotionOfDate'




function App() {
  return (
    <div className='bg-[rgb(4,9,17)] pl-6 pr-6 pt-10 pb-10 w-full  text-white min-h-screen flex flex-col items-center gap-4'>

       <ExpenseForm />

      <CalendarDate />

      <StatisticOfDate />
      
      <ExitAcc />

      <NotionOfDate />


      
     
      
    </div>
  )
}

export default App