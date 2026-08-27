import { useState } from 'react'

import './App.css'


// let counter = 15

function App() {

  const [counter, setCounter] = useState(0)
  
  const addValue = () => {
    setCounter(counter + 1)
    console.log(counter)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
    console.log(counter);
    
  }

  return (
    <section style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px"
    }}>
    <>
      <h1>React Course With Hitesh. {counter}</h1>
      <h2 style={
        {
          fontSize: "xx-large",
      }
      }>Counter Value: {counter}</h2>
      <button style={
        {
        padding: "5px",
        borderRadius: "8px",
        backgroundColor: "white",
        color: "black",
        }
      }
      onClick={addValue}>Add Value</button>
      <button style={
        {
        padding: "5px",
        borderRadius: "8px",
        backgroundColor: "white",
        color: "black",
      }
      }
      onClick={removeValue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
    </section>
  )
}

export default App
