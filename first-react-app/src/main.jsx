import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Revision from './Revision.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Revision />
  </StrictMode>,
)
