import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
type IncomeType ={
    id:string;
    source: string;
    amount: number;
    date: string;
};

type IncomeFormProps = {
    onGetTotalIncomeAmount: (amount: number) => void ;}

    export const IncomeFrom = (props: IncomeFormProps) =>{
    const [source, setSource]= useState<string>('');
    const [amount, setAmount]= useState<number>(0);
    const [date, setDate]= useState<string>('');
    const [incomes, setIncomes]= useState<IncomeType[]>([]);

    const totalAmount = incomes.reduce(
        (total, currentValue) => total + currentValue.amount,
0
);
props.onGetTotalIncomeAmount(totalAmount);

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
    const income = {
        id: uuidv4(),
        source: source,
        amount: amount,
        date: date,
    };

    setIncomes((prevIncomes) => [...prevIncomes, income]);
    toast.success("new income is added");

    const totalAmount = incomes.reduce(
        (total, currentValue) => total + currentValue.amount,
        0
    );
    console.log(totalAmount);

    setSource("");
    setAmount(0);
    setDate("");
    };


    const deleteAnIncome = (id: string) => {
      const filteredIncomes = incomes.filter((income) => income.id !== id);
      setIncomes(filteredIncomes);
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
           <div className='form-field'>
           <label htmlFor='source'>Income source : </label>
            <input type='text' name='source' id='source' value={source} onChange={handleSourceChange}required/>
           </div>

           <div className='form-field'>
           <label htmlFor='amount'>Amount of Income </label>
            <input type='number' name='amount' id='amount'onChange={handleAmountChange} required/>
           </div>

           <div className='form-field'>
           <label htmlFor='amount'>date of Income </label>
            <input type='date' name='date' id='date'onChange={handleDateChange} required/>
           </div>
           <button>Add income</button>
        </form>

        <ul>
            {incomes.length> 0 ?(
           incomes.map((income) => {
                return (

                <li   key={income.id}>
                    {income.source}: {income.amount}EUR on {income.date}
                    <button onClick={() => deleteAnIncome(income.id)}> 
                  Delete
                </button>
                    </li>
                );
            })
            ) : (
                <p>No income source </p>
            )}
        </ul>
        </div>

    );
            };


export default IncomeFrom