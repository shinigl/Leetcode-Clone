import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' ;
import Card from './components/Card'
import Interface from './components/Interface';


const routes = createBrowserRouter([
  {
    path: '/',
    element : <App/>
  },
  {
    path: '/interface',
    element : <Interface/>
  }

]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router ={routes}>

  </RouterProvider>

)
