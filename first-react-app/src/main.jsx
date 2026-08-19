import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StateDeepDive from './StateDeepDive.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateDeepDive />
  </StrictMode>,
)
