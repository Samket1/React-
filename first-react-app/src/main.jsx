import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TechStoreChallenge from './TechStoreChallenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TechStoreChallenge />
  </StrictMode>,
)
