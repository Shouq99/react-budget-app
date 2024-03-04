import React from 'react';

const TranferForSaving = () => {
    return (

        <div>
                <p>Curent balance : 0 </p>

        <form action=''>
           <div className='form-field'>
           <label htmlFor='source'>Tranfer to Saving account </label>
           <input type='number' name='amount' id='amount' required/>
           </div>
           <button>Tranfer</button>

        </form>
        </div>
        
    );


};

export default TranferForSaving;