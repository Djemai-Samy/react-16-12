import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StrictMode } from 'react'

// React a selectionner la div avec l'ID root, puis on a render dans cette div, l'élément qui vient de App.jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />,
  </StrictMode>
)
