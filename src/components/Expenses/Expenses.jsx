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
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseItem  title={props.item[0].title} price={props.item[0].amount} date={props.item[0].date}/>
            <ExpenseItem  title={props.item[1].title} price={props.item[1].amount} date={props.item[1].date}/>
            <ExpenseItem  title={props.item[2].title} price={props.item[2].amount} date={props.item[2].date}/>
            <ExpenseItem  title={props.item[3].title} price={props.item[3].amount} date={props.item[3].date}/>
        </Card>
    );
}

export default Expenses;