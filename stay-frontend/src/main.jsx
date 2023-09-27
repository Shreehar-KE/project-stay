import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'
import Checkout from './pages/checkout/Checkout'
import Dashboard from './pages/dashboard/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/hotels",
    element: <List/>,
  },
  {
    path: "/hotels/:id",
    element: <Hotel/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/user/:id",
    element: <Dashboard/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
