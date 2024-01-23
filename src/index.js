import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar, Footer } from './pages/layout'; //importamos tanto el nav bar como el footer de layout.js
import { Home } from './pages/home';
import { Products } from './pages/products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//se usa est7a funcion para devolver un componente de react
//la estructura de abajo se encarga de ejecutar los import, ademas, si queremos que las distintas paginas se ejecuten de forma separada y no en la misma pagina se usa el ROUTES
function App() {
  return (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  );
}

//se guarda en variable
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

