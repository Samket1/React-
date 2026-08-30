import './App.css'
import { useState } from 'react'

function InputLesson() {
  const [username, setUsername] = useState('')
  return (
    <div className="container">
      <h1 className="header">Lesson 5: Live Text Inputs & Forms ✍️✨</h1>
      <input type="text" placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)} />
    </div>
  )
}
export default InputLesson
