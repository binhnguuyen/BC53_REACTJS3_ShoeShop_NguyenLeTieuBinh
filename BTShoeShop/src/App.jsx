import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BTShoe } from './BTShoe/BTShoe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BTShoe />
    </div>
  )
}

export default App
