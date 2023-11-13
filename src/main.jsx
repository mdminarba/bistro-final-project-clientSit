import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { routers } from './Pages/Home/Shared/Routs/Routs';
import { HelmetProvider } from 'react-helmet-async';
import AuthProbider from './providers/AuthProbider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProbider>
  <HelmetProvider>
        <div className=" max-w-screen-xl mx-auto">
          <RouterProvider router={routers} />
        </div>
      </HelmetProvider>
  </AuthProbider>
  </React.StrictMode>,
)
