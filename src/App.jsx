import './App.css'
import  Card  from './components/Cards'
import { Navbar, Footer } from './Page/layoud'
import getProducts from './services/productService'
function App() {
  return (
    <>
      <Navbar />
      <Card title="iPhone" price="$40" description="An apple mobile which is nothing like apple" />
      <Footer />
    </>
  )
}
export default App
