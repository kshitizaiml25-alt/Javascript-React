import { useCallback, useEffect, useState, useRef } from 'react' 
import bgImage from './assets/bg.jpg'
import './App.css' 

 
function App() { 
  const [length, setLength] = useState(7) 
  const [numberAllowed, setNumberAllowed] = useState(false) 
  const [specialCharacter, setSpecialCharacter] = useState(false) 
  const [password, setPassword] = useState("") 


  const generatepassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (specialCharacter) {
      str += "!@#$%^&*()_+"
    }
    for (let i = 1; i < length; i++) {
      const index = Math.floor(Math.random() * str.length)
      pass += str[index]
    }
    setPassword(pass)
  },[length, numberAllowed, specialCharacter])

  useEffect(() => {
    generatepassword()
  }, [length, numberAllowed, specialCharacter])
  
  const copyPasswordtoClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  const passwordRef = useRef(null)

  return ( 
    <div
      className="relative min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Password Generator Card */}
      <div className="relative z-10 w-full max-w-md mx-auto shadow-2xl rounded-lg px-4 py-6 bg-gray-800/80 backdrop-blur-sm text-orange-500 border border-gray-600"> 
        <h1 className="text-white text-center my-3 text-2xl font-bold tracking-wide">🔐 Password Generator</h1> 
        <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
          <input type="text" 
          value={password} 
          className="outline-none w-full py-1 px-3 bg-white text-gray-800" 
          placeholder="Password" 
          readOnly 
          ref={passwordRef}
          /> 
          <button 
          onClick={copyPasswordtoClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600 transition-colors">Copy</button> 
        </div> 
        <div className="flex items-center gap-x-5"> 
          <div 
          className="flex items-center gap-x-1"> 
            <input  
            type="range"  
            min={7} 
            max={21} 
            value={length} 
            className='cursor-pointer' 
            onChange={(e) => setLength(e.target.value)} 
            name=""  
            id="" 
           /> 
            <label htmlFor="length">Length:{length}</label> 
          </div> 
        <div className="flex items-center gap-x-1"> 
        <input 
            type="checkbox" 
            defaultChecked={numberAllowed} 
            id="numberInput" 
            onChange={() => { 
                setNumberAllowed((prev) => !prev); 
            }} 
        /> 
        <label htmlFor="numberInput">Numbers</label> 
        </div>
        <div className="flex items-center gap-x-1"> 
        <input 
            type="checkbox" 
            defaultChecked={specialCharacter} 
            id="charInput" 
            onChange={() => { 
                setSpecialCharacter((prev) => !prev); 
            }} 
        /> 
        <label htmlFor="charInput">Characters</label> 
        </div> 

        </div>  

      </div>  
    </div>
  ) 
} 
 
export default App