import './App.css'
import { useState } from 'react'

function StateLesson() {
  const [count, setCount] = useState(0)
  return (
    <div className="container">
      <h1 className="header">Lesson 5: React State (`useState`) ⚡</h1>
      <h2 className='subtitle'>Current Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  )
}

export default StateLesson
