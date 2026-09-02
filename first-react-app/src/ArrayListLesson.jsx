import './App.css'
import { useState } from 'react'

function ArrayListLesson() {
  const [foods, setFoods] = useState(["🍕 Pepperoni Pizza", "🍔 Double Cheeseburger", "🌮 Street Tacos", "🍣 Salmon Sushi"])

  return (
    <div className="container">
      <h1 className="header">Mapping Drill: Round 2 of 3 🍕🍔</h1>
      {foods.map((junks, index) => (
        <div className='card'> c</div>
      ))}
    </div>
  )
}

export default ArrayListLesson
