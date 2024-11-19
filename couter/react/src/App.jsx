import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Couters from './assets/counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Couters />
    </>
  )
}

export default App
