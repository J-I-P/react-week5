import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './assets/index.jsx'

RouterProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
