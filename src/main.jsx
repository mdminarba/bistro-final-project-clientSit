import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { routers } from './Pages/Home/Shared/Routs/Routs';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=" max-w-screen-xl mx-auto">
    <RouterProvider router={routers} />
    </div>
  </React.StrictMode>,
)
