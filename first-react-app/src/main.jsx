import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RickMortyChallenge from './RickMortyChallenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RickMortyChallenge />
  </StrictMode>,
)
