
import './App.css'
import { Link, Route, Routes }  from 'react-router-dom'
import './Page/form.jsx'
import Form from './Page/form.jsx'




 function Home () {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
} 




function App () {
  return (
    <div className='App'>
      <header>
        <img src="src/img/InvertLogo3 1.png" alt="imagen logo" />
        <nav>
          <ul>
            {<li><Link to='/'>Home</Link></li>}
            <li><Link to='./form'>Form</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App 


