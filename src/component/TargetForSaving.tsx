import React from 'react';

export const TargetForSaving = (props: {savingAmount: number}) => {
   console.log(props.savingAmount);
    return (

        <div>
        <form action=''>
           <div className='form-field'>
           <label htmlFor='source'>Set Target : </label>
           <input type='number' name='amount' id='amount' required/>
           </div>
           <button>reset</button>

        </form>
        <p>Target: 299</p>
        <p>Current Saving: {props.savingAmount}</p>
        <p><progress max={5000} value={1000}/>{' '}</p>
        </div>
        
    );


};

export default TargetForSaving;