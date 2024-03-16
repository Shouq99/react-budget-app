import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Budget from "../Budget";
export const Rout1 = () => {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/budget" element={<Budget />} />
          </Routes>
        </BrowserRouter>
        </div>

        );};

export default Rout1;