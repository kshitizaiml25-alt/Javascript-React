import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with TailWind</h1>
      <Cards username="Kshitiz Aman" post="Not Assinged Yet"/>
      <Cards username="Aman" post="Staff Engineer"/>
      <Cards/>
    </>
  )
}

export default App
