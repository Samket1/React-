import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FoodChallenge from './FoodChallenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FoodChallenge />
  </StrictMode>,
)
