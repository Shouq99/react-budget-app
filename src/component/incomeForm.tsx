import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type IncomeType ={
    id:string;
    source: string;
    amount: number;
    date: string;
};

const IncomeForm = () => {

    const [source, setSource]= useState<string>('');
    const [amount, setAmount]= useState<number>(0);
    const [date, setDate]= useState<string>('');
    const [incomes, setIncomes]= useState<IncomeType[]>([]);

    const handleSourceChange = (event: ChangeEvent <HTMLInputElement>) => {
        const {value} = event.target;
        setSource(value);

    } 
     const handleAmountChange = (event: ChangeEvent <HTMLInputElement>) => {
        const {value} = event.target;
        setAmount(Number(value));
    } 
     const handleDateChange = (event: ChangeEvent <HTMLInputElement>) => {
        const {value} = event.target;
        setDate(value);
    }

    const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const income = {
        id: uuidv4(),
        source: source,
        amount: amount,
        date: date,
    };

    setIncomes((prevIncomes) => {
        return [...prevIncomes, income];
    });

    setSource("");
    setAmount(0);
    setDate("");
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
            {incomes.map((income) => {
                return <li key={income.id}>
                    {income.source}: {income.amount}EUR on {income.date}</li>;
            })}
        </ul>
        </div>
        
    );


};

export default IncomeForm;