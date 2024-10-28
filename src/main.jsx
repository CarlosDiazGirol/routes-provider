import React from 'react'
import ReactDom from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Routes'
// import App from './App'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)