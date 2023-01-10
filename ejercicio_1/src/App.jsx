import './App.css'
import Card from './components/card/Card'

function App() {

  return (
    <div className="App">
        <div className="bar"></div>
        <h3>MENÚ DE NAVEGACIÓN</h3>
        <div className='cardsContainer'>
          <div className="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
            <div className="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
        <div className="barBottom"></div>
    </div>
  )
}

export default App
