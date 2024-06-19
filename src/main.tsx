import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Keyboard } from './typescript/components/Keyboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Keyboard />
  </React.StrictMode>
)
