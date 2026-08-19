import './App.css'
import { useState } from 'react'

function StateDeepDive() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    < div className={isDarkMode ? "page-dark" : "page-light"} >
      <h1 className="header">Understanding State Conceptually 🧠💡</h1>

      <button onClick={(() => setIsDarkMode(!isDarkMode))}>
        {isDarkMode ? 'Dark' : 'Light'}
      </button>
    </div >
  )
}

export default StateDeepDive