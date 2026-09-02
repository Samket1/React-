import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DynamicListLesson from './DynamicListLesson.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DynamicListLesson />
  </StrictMode>,
)
