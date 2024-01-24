
import './App.css'
import { Navbar, Footer } from './Page/Layout'
import { Home } from './Page/Home'
import { Products } from './Page/Products'
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


