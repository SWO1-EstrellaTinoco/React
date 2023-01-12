import { useState } from 'react'
import reactLogo from './assets/react.svg'
import FunctionComponent from './components/FunctionComponent'
import VariableComponent from './components/VariableComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <VariableComponent />
    <FunctionComponent />
    </>
  )
}

export default App
