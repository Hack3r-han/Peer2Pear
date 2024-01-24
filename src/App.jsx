
import './App.css'
import { Navbar, Footer } from './pages/layout'
import { Home } from './pages/home'
import { Products } from './pages/products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
    

  )  
}

export default App


