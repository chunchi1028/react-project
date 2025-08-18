import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'
// import App from './App0805-1'
// import App from './App0805-2'
//  import './all.css'
// import App from './MyApp'
import App from"./pages/App0818_3"

createRoot(document.getElementById('root')).render(
  // 嚴謹模式
  <StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </StrictMode>,
)
