import React from 'react'
import ReactDOM from 'react-dom/client'
 import App2 from './App2';
import './index.css'
import Budget from './Budget';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <App2 />  
     <Budget /> 
  </React.StrictMode>,
);


 