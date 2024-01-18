import './App.css'
import  Card  from './components/Cards'
import { Navbar, Footer } from './Page/layoud'
function App() {
  return (
    <>
      <Navbar />
      <Card title="iPhone" price="$40" description="An apple mobile which is nothing like apple" />
      <Card title="Zapato" price="$70" description="de Cuero" />
      <Footer />
      
    </>
  )
}
export default App
