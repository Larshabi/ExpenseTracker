import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {useState} from 'react'

const NewExpense = (props)=>{
    const [isEditing, setIsEditing] = useState(false)
    const SaveExpenseData =(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        
        props.onAddExpense(expenseData)
    }

    const startEditingHandler = ()=>{
        setIsEditing(true)
    }
    const stopEditingHandler = ()=>{
        setIsEditing(false)
    }
    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expenses</button>
            )}
            {
                isEditing && (<ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={SaveExpenseData} />)
            }
           
        </div>    
    );
}

export default NewExpense;