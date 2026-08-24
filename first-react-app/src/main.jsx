import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StateChallenge from './StateChallenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateChallenge />
  </StrictMode>,
)
