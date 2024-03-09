import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';

type TargetForSavingProps ={
    onGetSavingAmount: (amount: number) => void;}

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
                <p>Curent balance : 0 </p>

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