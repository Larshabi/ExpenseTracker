import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {useState} from 'react'


const DUMMY_EXPENSES = [
    {
        id:'e1',
        title:'Toilet Paper',
        amount: 94.12,
        date: new Date(2022, 7, 12)
    },
    {
        id:'e2',
        title:'New TV',
        amount:800,
        date: new Date(2022, 1, 12)
    },
    {
        id:'e3',
        title:'Car Insurance',
        amount:296.4,
        date: new Date(2022, 5, 23)             
    },
    {   
        id:'e4',
        title:'New Desk (wooden)',
        amount:230,
        date: new Date(2022, 5, 12)
    }
]
const App =  () => {
    const [expenses, setExpenses]=useState(DUMMY_EXPENSES)

    const addExpenseHandler = (expense)=>{
        setExpenses((prevExpense)=>{
            return [expense, ...prevExpense]
        })
    }
    return ( 
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/> 
        <Expenses item={expenses}/>
    </div>
    );
}

export default App;