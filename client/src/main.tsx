import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App.tsx'

import '@/assets/styles/constants.scss'
import '@/assets/styles/reseter.scss'
import '@/assets/styles/main.scss'
import '@/assets/styles/scroll.scss'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>,
)