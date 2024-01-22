import './App.css'
import  Card  from './components/Cards'
import { Navbar, Footer } from './Page/layoud'
import {ProductList} from './services/productService'
function App() {
  return (
    <>
      <Navbar />
      <ProductList/>
      <Footer />
    </>
  )
}
export default App
