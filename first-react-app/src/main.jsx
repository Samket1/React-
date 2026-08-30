import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InputChallenge from './InputChallenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InputChallenge />
  </StrictMode>,
)
