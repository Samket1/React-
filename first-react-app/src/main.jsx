import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StateLesson from './StateLesson.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateLesson />
  </StrictMode>,
)
