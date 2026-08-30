import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ArrayListLesson from './ArrayListLesson.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArrayListLesson />
  </StrictMode>,
)
