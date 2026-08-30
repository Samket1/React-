import './App.css'
import { useState } from 'react'

function ArrayListLesson() {
  const [tasks, setTasks] = useState(["Buy Groceries", "Finish Homework", "Hit the Gym"])
  return (
    <div className="container">
      <h1 className="header">Dynamic Tasks & Lists 📋</h1>
      {tasks.map((task, index) => (
        <div style={{ marginBottom: "12px" }} className='card'
          key={index}>
          <h3>📌 {task}</h3>
        </div>
      ))}
    </div>
  )
}

export default ArrayListLesson
