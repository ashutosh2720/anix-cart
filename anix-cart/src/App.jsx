import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mockman from 'mockman-js'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mockman />
    </>
  )
}

export default App
