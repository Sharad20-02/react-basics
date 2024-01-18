import { useState } from 'react'
import './App.css'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React_Project</h1>
      <Events />
    </>
  )
}

export default App
