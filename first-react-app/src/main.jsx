import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AnimeChallenge from './AnimeChallenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimeChallenge />
  </StrictMode>,
)
