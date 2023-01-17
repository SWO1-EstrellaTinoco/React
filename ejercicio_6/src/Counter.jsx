import { useState } from "react"

export default function Counter() {

    const[counter,setCounter] = useState(0)

    const up = () => {
        setCounter(counter +1)
    }
    
    const down = () => {
        setCounter(counter -1)
    }

    const reset = () => {
        setCounter(0)
    }

  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={up}>Aumentar</button>
        <button onClick={down}>Disminuir</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
