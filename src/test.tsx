// import React, { useCallback, useState } from "react";


// import "../styles/App.css";
// import { Income } from "./Incom";
// import { Expense } from "./Expense";
// import { Target } from "./Target";
// import { Balance } from "./Balance";
// import { Saving } from "./Saving";

// function Budget() {
//   const [transferAmount, setTransferAmount] = useState(0);
//   const [incomeBalance, setIncomeBalance] = useState(0);
//   const [expenseBalance, setExpenseBalance] = useState(0);
//   const [balance, setBalance] = useState(0);
//   const getIncomeBalance = (incomeBalance: number) => {
//     setIncomeBalance(incomeBalance);
//   };

//   const getExpenseBalance = useCallback((expenseBalance: number) => {
//     setExpenseBalance(expenseBalance);
//   }, []);
//   const getTransferAmount = useCallback((amount: number) => {
//     setTransferAmount((prevamount) => prevamount + amount);
//   }, []);

//   const getTheBalance = useCallback((balance: number) => {
//     setBalance(balance);
//   }, []);

//   return (
//     <div>
//       <div className="appdiv">
//         <Income onGetIncomeBalance={getIncomeBalance} />
//         <Expense onGetExpenseBalance={getExpenseBalance} />
//         <Target transferAmount={transferAmount} />
//       </div>
//       <div className="appdiv">
//         <Balance
//           incomeBalance={incomeBalance}
//           expenseBalance={expenseBalance}
//           transferAmount={transferAmount}
//           getTheBalance={getTheBalance}
//         />
//       </div>
//       <div className="appdiv">
//         <Saving onGetTransferAmount={getTransferAmount} />
//       </div>
//     </div>
//   );
// }

// export default Budget;