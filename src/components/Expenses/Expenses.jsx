import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import {useState} from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props)=>{
    const [filteredYear, setFilteredYear] = useState('')
    const filterChangeHandler =(selectedYear)=>{
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.item.filter((expense)=>{
        return expense.date.getFullYear().toString() === filteredYear
    })

   
    
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
            {filteredExpenses.length > 0 &&  (filteredExpenses.map((expense)=> <ExpenseItem key={expense.id} title={expense.title} date={expense.date} price={expense.amount}/>))} */}
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
        
            
        </Card>
    );
}

export default Expenses;