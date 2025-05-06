import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200 flex justify-center' style={{ backgroundColor: color }}>
      <div className='fixed bottom-12 flex items-end justify-center px-2 inset-x-0'>
        <div className='flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button class="bg-blue-500 hover:bg-blue-600 text-black py-2 px-4 rounded-full"
          onClick={() => setColor('blue')}
          >
            Blue Color
          </button>
          <button class="bg-amber-500 hover:bg-amber-600 text-black py-2 px-4 rounded-full"
          onClick={() => setColor('amber')}
          >
            Amber Color
          </button>
          <button class="bg-cyan-500 hover:bg-cyan-600 text-black py-2 px-4 rounded-full"
          onClick={() => setColor('cyan')}
          >
            Cyan Color
          </button>
          <button class="bg-fuchsia-500 hover:bg-fuchsia-600 text-black py-2 px-4 rounded-full"
          onClick={() => setColor('fuchsia')}
          >
            Fuchsia Color
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
