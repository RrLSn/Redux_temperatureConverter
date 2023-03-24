import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container } from 'postcss'
import ConverterCard from './components/ConverterCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App w-[100vw] h-[100vh] flex place-items-center">
      <ConverterCard />
    </div>
  )
}

export default App
