import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  function changeColor (color) {
    setColor(color)
  }


  return (
    <>
    <div className="w-full h-screen duration-200 bg-black" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => changeColor("red")}
          style={{backgroundColor:"red"}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >Red</button>
          <button
          onClick={() => changeColor("yellow")}
          style={{backgroundColor:"yellow"}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >Yellow</button>
          <button
          onClick={() => changeColor("blue")}
          style={{backgroundColor:"blue"}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >Blue</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
