import './App.css';
import Counter from './component/Counter';
import IncomeForm from './component/incomeForm';
import ExpenseForm from './component/ExpenseForm';
import TargetForSaving from './component/TargetForSaving';
import TranferForSaving from './component/TransferForSaving';


function App() {
  return (
    <div>    <h1>budget-app</h1>
    
<div className="container">
  <div className="card">
{/* <Counter/> */}
<IncomeForm/>
</div>
<div className="card">

   <ExpenseForm/>
   </div>

   <div className="card">
   <TargetForSaving/> 
   </div>  <div className="card">
   <TranferForSaving/>
   </div>
   </div>
    </div>
  );
}

export default App;
