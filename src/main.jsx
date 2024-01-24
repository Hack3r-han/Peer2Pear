import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Products } from './components/Formproduct.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </BrowserRouter>
)
// problemas en el router

