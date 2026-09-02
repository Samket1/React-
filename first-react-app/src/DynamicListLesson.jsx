import './App.css'
import { useState } from 'react'

function DynamicListLesson() {
  const [skills, setSkills] = useState([
    "⚛️ React.js",
    "🟨 Modern JavaScript",
    "🎨 Vanilla CSS"
  ])
  const [newSkill, setNewSkill] = useState("")
  return (
    <div className="container">
      <h1 className="header">Dynamic Interactive List ⚡📋</h1>

      <input type='text' placeholder='Add Skills' value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)} />

      <button className='btn' onClick={() => {
        setSkills([...skills, newSkill])
        setNewSkill('')
      }}>Add</button>


      {skills.map((skill, index) => (
        <div className="card" style={{ marginTop: "16px" }} key={index}>
          <h3>{skill}</h3>
          <button className='btn' onClick={() => setSkills(skills.filter((_, i) => (i !== index)))} >  🗑️ Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default DynamicListLesson
