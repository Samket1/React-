import './App.css'
import { useState } from 'react'
function Revision() {
  const [score, setScore] = useState(10)
  const [showSecret, setSecret] = useState(false)
  return (
    <div className="container">
      <h1 className="header">Lesson 5: Full Recap & Revision 🧠⚡</h1>
      <h2>{score}</h2>
      <button onClick={(() => setScore(score + 5))}>+5 button</button>
      <button onClick={(() => setScore(score - 5))}>-5 button</button>
      <button onClick={(() => setScore(10))}>Reset</button>
      <button onClick={(() => setSecret(!showSecret))}>{showSecret ? 'visible' : 'hidden'} button</button>
      <h3>{showSecret && }</h3>
    </div>
  )
}
export default Revision
