import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ComponentMappingRevision from './ComponentMappingRevision.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComponentMappingRevision />
  </StrictMode>,
)
