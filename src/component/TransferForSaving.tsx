import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';

type TargetForSavingProps ={
    onGetSavingAmount: (amount: number) => void;
    totalIncomeAmount: number;
    totalExpenseAmount: number;
};
   



export const TranferForSaving = (props:TargetForSavingProps) => {

    const [amount, setAmount] = useState(0);

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
setAmount(Number (event.target.value));

    };

    const handleSubmit = (event: FormEvent)=>{
        event.preventDefault();
        props.onGetSavingAmount(amount);
    };
    return (

        <div>
                <h2>
                    Curent balance:{props.totalIncomeAmount - props.totalExpenseAmount}  
                </h2>

        <form onSubmit={handleSubmit}>
           <div className='form-field'>
           <label htmlFor='source'>Tranfer to Saving account </label>
           <input type='number' name='amount' id='amount' onChange={handleAmountChange} required/>
           </div>
           <button>Tranfer</button>

        </form>
        </div>
        
    );


};

export default TranferForSaving;