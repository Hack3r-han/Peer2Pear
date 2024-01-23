import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { router } from './root/router';
import { RouterProvider } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <router>
      <RouterProvider router={router} />
    </router> 
  </React.StrictMode>,
)
// problemas en el router