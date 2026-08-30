import './App.css'
import { useState } from 'react'

function InputLesson() {
  const [username, setUsername] = useState('')
  const [role, setRole] = useState("")
  return (
    <div className="container">
      <h1 className="header">Lesson 5: Live Text Inputs & Forms ✍️✨</h1>
      <input className="input-field" type="text" placeholder='Name' value={username}
        onChange={(e) => setUsername(e.target.value)} />
      <input className="input-field" type="text" placeholder='Enter your role (e.g. Developer)...' value={role} onChange={(e) => setRole(e.target.value)} />
      <div className='card' style={{ marginTop: "20px" }}>

        <h2>Welcome, {username}</h2>
        <subtitle>
          {username ? "Your VIP Pass is ready!" :
            "Waiting for you to type your name..."}
        </subtitle>
        <p>{role ? role : "No Role Assigned yet"}</p>
        <p>Characters: {username.length}</p>
        <button onClick={() => {
          setUsername('')
          setRole('')
        }}>Clear</button>

      </div>
    </div>
  )
}
export default InputLesson
