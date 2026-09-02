import './App.css'
import { useState } from 'react'

function DynamicListLesson() {
  const [skills, setSkills] = useState([
    "⚛️ React.js",
    "🟨 Modern JavaScript",
    "🎨 Vanilla CSS"
  ])

  return (
    <div className="container">
      <h1 className="header">Dynamic Interactive List ⚡📋</h1>

      {/* 1. Input & Add Button will go here */}

      {/* 2. List of Cards will be mapped here */}
      {skills.map((skill, index) => (
        <div className="card" style={{ marginTop: "16px" }} key={index}>
          <h3>{skill}</h3>
        </div>
      ))}
    </div>
  )
}

export default DynamicListLesson
