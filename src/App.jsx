import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hola from '../.vite/component/saludo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Hola name="Victor"/>
  )
}

export default App
