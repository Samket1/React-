import './App.css'
import { useState } from 'react'
function StateChallenge() {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className="container">
      <h1 className="header">React State Master Challenge ⚡</h1>
      <div class='card'>
        <h2>🎧 Wireless Headphones</h2>
        <p>Quantity: {quantity}</p>
        <p>Total Price: ${quantity * 25}</p>
        <button onclick={(() => setQuantity(quantity + 1))}>+</button>

        <button onclick={(() => setQuantity(quantity - 1))}>-</button>

      </div>
    </div>
  )
}

export default StateChallenge
