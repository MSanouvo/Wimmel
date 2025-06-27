import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Waldo from './Waldo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Waldo />
  </StrictMode>,
)
