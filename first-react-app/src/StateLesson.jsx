import './App.css'
import { useState } from 'react'

function StateLesson() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="container">
      <h1 className="header">Lesson 5: React State (`useState`) ⚡</h1>
      <h2 className='subtitle'>Current Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Click me (+1)</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrease (-1)</button>

      <button onClick={() => setIsOpen(!isOpen)}>Switch</button>
      {isOpen && <div className="card"><h3>🎉 Secret Box is OPEN!</h3></div>}
      {isOpen ? "Close it" : "Open itw"}

    </div>
  )
}

export default StateLesson
