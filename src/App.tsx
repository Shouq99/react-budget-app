import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Counter from './component/Counter';
import IncomeForm from './component/IncomeForm';
import ExpenseForm from './component/ExpenseForm';
import TargetForSaving from './component/TargetForSaving';
import TranferForSaving from './component/TransferForSaving';
import { useState } from 'react';

function App() {
const [savingAmount, setSavingAmount] = useState(0); 
 const getSavingAmount =(amount: number) => {
    setSavingAmount(amount);
  };
  return (
    <div>    <h1>budget-app</h1>
    
<div className="container">
  <div className="card">
 {/* <Counter/>  */}
<IncomeForm/>
</div>
<div className="card">

   <ExpenseForm/>
   <ToastContainer/>
   </div>

   <div className="card">
   <TargetForSaving savingAmount={savingAmount}/> 
   </div>  <div className="card">
   <TranferForSaving onGetSavingAmount={getSavingAmount}/>
   </div>
   </div>
    </div>
  );
}

export default App;
