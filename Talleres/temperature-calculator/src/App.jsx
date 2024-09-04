import { useState } from 'react'

import './App.css'
import Calculator from './components/Calculator'

function App() {
  const [age, setAge] = useState()

  return (
    <>
      <h1>Temperature Calculator</h1>
      <Calculator />
    </>
  )
}

export default App
