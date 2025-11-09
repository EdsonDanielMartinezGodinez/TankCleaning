import { useState } from 'react'
import { Tank } from './components/Tank'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Tank></Tank>
  )
}

export default App
