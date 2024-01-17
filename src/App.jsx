import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hola from '../.vite/component/saludo.jsx'
import { Lenguaje } from '../.vite/component/micompon.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <Hola name="Victor"/>
   <Lenguaje/>
    </div>
  )
}

export default App
