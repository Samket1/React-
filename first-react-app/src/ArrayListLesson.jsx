import './App.css'
import { useState } from 'react'

function ArrayListLesson() {
  const [skills, setSkills] = useState([
    "⚛️ React.js",
    "🟨 Modern JavaScript",
    "🎨 Vanilla CSS",
    "⚡ Vite Tooling"
  ])

  return (
    <div className="container">
      <h1 className="header">Mapping Drill: Round 3 of 3 ⚡💻</h1>
      {skills.map((Sz, index) => (
        <div className='card' style={{ marginTop: '20px' }} key={index}>
          {Sz}
        </div>))}
    </div >
  )
}

export default ArrayListLesson
