import './Expenses.css';
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import {useState} from 'react'

const Expenses = (props)=>{
    const [filteredYear, setFilteredYear] = useState('')
    const filterChangeHandler =(selectedYear)=>{
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.item.filter((expense)=>{
        return expense.date.getFullYear().toString() === filteredYear
    })

    let expenseContent = <p>No expenses found</p>
    if (filteredExpenses.length > 0){
        expenseContent =  (filteredExpenses.map((expense)=> <ExpenseItem key={expense.id} title={expense.title} date={expense.date} price={expense.amount}/>))
    }
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
            {filteredExpenses.length > 0 &&  (filteredExpenses.map((expense)=> <ExpenseItem key={expense.id} title={expense.title} date={expense.date} price={expense.amount}/>))} */}
            {expenseContent}
        
            
        </Card>
    );
}

export default Expenses;