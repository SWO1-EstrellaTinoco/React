import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ComponenteUno from './components/ComponenteUno'
import ComponenteDos from './components/ComponenteDos'

function App() {

  return (
    <>
      <ComponenteUno phone={658472153}/>
      <ComponenteDos phone={458632154} />
    </>
  )
}

export default App
