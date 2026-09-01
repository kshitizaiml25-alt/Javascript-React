import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {useCurrencyInfo} from "./hooks/useCurrencyInfo.js"
import {Inputbox} from './components/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedamount, setConvertedamount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedamount(amount)
    setAmount(convertedamount)
  }

  const convert = () => {
    setConvertedamount(amount * currencyInfo[to])
  }

  return (
    <div
    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/12591344/pexels-photo-12591344.jpeg)`}}>

      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <Inputbox
              label = "from"
              amount = {amount}
              currencyOptions = {options}
              onCurrencyChange = {(currency) => setFrom(currency)}
              onAmountChange = {(amount) => setAmount(amount)}
              selectedCurrency = {from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}>
                swap
              </button>
            </div>
            <div className='w-full mb-1'>
              <Inputbox
              label = "to"
              amount = {convertedamount}
              amountDisabled 
              currencyOptions = {options}
              onCurrencyChange = {(currency) => setTo(currency)}
              selectedCurrency = {to}
              />
              <button
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-1.5'
              type='submit'
              >Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App
