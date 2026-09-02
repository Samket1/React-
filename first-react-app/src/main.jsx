import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ArrayMasterChallenge from './ArrayMasterChallenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArrayMasterChallenge />
  </StrictMode>,
)
