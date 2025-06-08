import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StepsProvider } from "./context/StepsContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StepsProvider>
        <App />
    </StepsProvider>
  </StrictMode>,
)
