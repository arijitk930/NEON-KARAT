import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Insights from './pages/Insights.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/insights' element={<Insights/>}/>
    </Route>
  ));


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}> 
      <App />
    </RouterProvider>
  </StrictMode>,
)
