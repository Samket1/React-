import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CargoChallenge from './CargoChallenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CargoChallenge />
  </StrictMode>,
)
