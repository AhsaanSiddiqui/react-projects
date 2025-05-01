import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400'>Working Tailwindcss...</h1>
      <Card username="John Doe" btnText="Click me" />
      <Card username="Walton" btnText="Visit me" />
    </>
  )
}

export default App
