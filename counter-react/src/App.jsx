import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  // let counter = 0
  const addValue = () => {
    // counter = counter + 1
    if(counter < 20) {
      setCounter(counter + 1)
      // is code me add value + 2 add hogi. React me jitne bhi state hoti hai in sb me callback function accept krta hai.
      // setCounter((prev) => prev + 1) // setCounter((prev) => prev + 1) existing state declared
      // setCounter((prev) => prev + 1)
    }
    console.log(counter)
  }

  const removeVal = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter React JS</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeVal}>Remove value</button>

    </>
  )
}

export default App
