import React from 'react'
import ManagerHome from './managerSide/managerHome'
import CustomerHome from './customerSide/customerHome'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
                  <BrowserRouter>
                <Routes>
                    <Route path="/manager" element={<ManagerHome />} />
                    <Route path="/customer" element={<CustomerHome/>} />
                </Routes>
            </BrowserRouter>
    </div>
  )
}

export default App