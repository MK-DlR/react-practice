import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { Majima } from './Majima.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Majima  />
  </StrictMode>,
)
