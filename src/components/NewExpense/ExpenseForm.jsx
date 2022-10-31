import './ExpenseForm.css';
import {useState} from 'react'

const ExpenseForm = (props)=>{
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // if you want to use only one state to manage these values, it goes thus.
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount: '',
    //     enteredDate:''
    // })
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value)
        // updating with one useState
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredTitle:event.target.value
        //     }
        // })
    }
    const amountChangeHandler = (e)=>{
        setEnteredAmount(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:e.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredAmount:e.target.value
        //     }
        // })
    }
    const dateChangeHandler = (e)=>{
        setEnteredDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:e.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredDate:e.target.value
        //     }
        // })
    }

    const submitHandler = (e)=>{
        e.preventDefault(); 
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')
    }  
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;