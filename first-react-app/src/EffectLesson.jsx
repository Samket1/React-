import './App.css'
import { useState, useEffect } from 'react'

function EffectLesson() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [id, setId] = useState(1)
  const [avatar, setAvatar] = useState("")
  const [username, setUsername] = useState("Samket1")

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setName(data.name)
        setEmail(data.email)
        setCity(data.address.city)
        setIsLoading(false)
      })


  }
    , [id])

  return (
    <div className="cyber-container">
      <h1 className="header">Lesson 6: useEffect ⚡</h1>
      {isLoading && <p>📡 Downloading Intel...</p>}
      <h2 style={{ textAlign: "right" }}>{name}</h2>
      <p style={{ textAlign: "right" }}> email: <span style={{ color: '#00f0ff' }}>{email}</span></p>
      <p style={{ textAlign: "right" }}> city: <span style={{ color: '#d4ff00ff' }}>{city}</span></p>
      <input type="number" placeholder='🔍Search...' value={id} onChange={(e) => setId(e.target.value)} />
    </div>

  )
}

export default EffectLesson
