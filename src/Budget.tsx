 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import './Budget.css';
 import Counter from './component/Counter';
 import IncomeForm from './component/IncomeForm';
 import ExpenseForm from './component/ExpenseForm';
 import TargetForSaving from './component/TargetForSaving';
 import TranferForSaving from './component/TransferForSaving';
 import { useState } from 'react';

 function Budget() {
 const [savingAmount, setSavingAmount] = useState(0); 
 const [totalIncomeAmount, setTotalIncomeAmount] = useState(0); 
 const [totalExpenseAmount, setTotalExpenseAmount] = useState(0); 

  const getSavingAmount =(amount: number) => {
     setSavingAmount(amount);
   };

     const getTotalIncomeAmount = (amount: number)=>{
      setTotalIncomeAmount(amount);
    };
      const getTotalExpenseAmount = (amount: number)=>{
      setTotalExpenseAmount(amount);
   };


  return (
    <>
      <h1>budget-app</h1>
    
 <div className="container">
   <div className="card">

  {/* <Counter/>  */}
  <p>Total Income Amount: {totalIncomeAmount}</p>
 <IncomeForm onGetTotalIncomeAmount={getTotalIncomeAmount}/>
 </div>
 <div className="card">

    <ExpenseForm onGetTotalExpenseAmount={getTotalExpenseAmount}/>
    <ToastContainer/>
    </div>
    <div className="card">
    <TargetForSaving savingAmount={savingAmount}/> 
    </div>  <div className="card">
    <TranferForSaving 
    onGetSavingAmount={getSavingAmount}
    totalIncomeAmount= {totalIncomeAmount}
    totalExpenseAmount= {totalExpenseAmount}
    />
    </div>
    </div> 
    </>

  );
}

 export default Budget;
