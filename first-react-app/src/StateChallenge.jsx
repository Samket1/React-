import './App.css'
import { useState } from 'react'
function StateChallenge() {
  const [quantity, setQuantity] = useState(1)
  const [showSpecs, setShowSpec] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div className={`container ${isDarkMode ? "page-dark" : "page-light"}`}>
      <button onClick={(() => setIsDarkMode(!isDarkMode))}>{isDarkMode ? 'Light' : 'Dark'}</button>

      <h1 className="header">React State Master Challenge ⚡</h1>
      <div class={isDarkMode ? 'card' : 'card-light'}>
        <h2>🎧 Wireless Headphones</h2>
        <p>Quantity: {quantity}</p>
        <p>Total Price: ${quantity * 25}</p>
        <button onClick={(() => setQuantity(quantity + 1))}>+</button>
        <button onClick={(() => { setQuantity(quantity > 0 ? quantity - 1 : 0) })}>-</button>
        <button onClick={(() => setShowSpec(!showSpecs))}>{showSpecs ? 'Hide' : 'Show'}</button>
        {showSpecs && <subtitle> adbwabcdiahbwcdipahw </subtitle>}



      </div>
    </div>
  )
}
export default StateChallenge
