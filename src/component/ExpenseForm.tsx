import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type ExpenseType ={
    id:string;
    source: string;
    amount: number;
    date: string;
};

type ExpenseFromProps  ={
    onGetTotalExpenseAmount: (amount: number) => void;
};

export const ExpenseForm = (props: ExpenseFromProps) => {

    const [source, setSource]= useState('');
    const [amount, setAmount]= useState(0);
    const [date, setDate]= useState('');
    const [expense, setExpenses]= useState<ExpenseType[]>([]);
    
    const totalAmount = expense.reduce(
      (total, currentValue) => total + currentValue.amount,
0
);
props.onGetTotalExpenseAmount(totalAmount);


const handleSourceChange = (event: ChangeEvent <HTMLInputElement>) => {
  setSource(event.target.value);

};
const handleAmountChange = (event: ChangeEvent <HTMLInputElement>) => {
  setAmount(Number(event.target.value));
};
const handleDateChange = (event: ChangeEvent <HTMLInputElement>) => {
  setDate(event.target.value);
};

const handleSubmit = (event: FormEvent) => {
  event.preventDefault();
  const expense = {
      id: uuidv4(),
      source: source,
      amount: amount,
      date: date,
  };

  setExpenses((prevExpenses) => [...prevExpenses, expense]);
  toast.success("new expense is added");

  setSource("");
  setAmount(0);
  setDate("");
  };
  const deleteAnexpense = (id: string) => {
    const filteredsetExpenses = expense.filter((expense) => expense.id !== id);
    setExpenses(filteredsetExpenses);
  };

return (

  <div>
  <form onSubmit={handleSubmit}>
     <div className='form-field'>
     <label htmlFor='source'>Expense source </label>
      <input type='text' name='source' id='source'onChange={handleSourceChange} required/>
     </div>

     <div className='form-field'>
     <label htmlFor='amount'>Amount of Expense </label>
      <input type='number' name='amount' id='amount'onChange={handleAmountChange} required/>
     </div>

     <div className='form-field'>
     <label htmlFor='amount'>date of Expense </label>
      <input type='date' name='date' id='date' onChange={handleDateChange} required/>
     </div>
     <button>Add Expense</button>
  </form>

  <ul>
      {expense.map((expense) => {
          return <li key={expense.id}>
              {expense.source}: {expense.amount}EUR on {expense.date}
              <button onClick={() => deleteAnexpense(expense.id)}> 
                  Delete
                </button>
              </li>;
      })}
  </ul>        
  </div>

);


};
export default ExpenseForm;