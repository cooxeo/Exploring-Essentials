import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'



import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Router,
} from "react-router-dom";


import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Place1 from './pages/Place1.jsx'
import Placetwo from './pages/Placetwo.jsx'
import Place3 from './pages/Place3.jsx'
import Place4 from './pages/Place4.jsx'
import Place5 from './pages/Place5.jsx'
import Place6 from './pages/Place6.jsx'
import Place7 from './pages/Place7.jsx'
import Place8 from './pages/Place8.jsx'
import Place9 from './pages/Place9.jsx'
import Place10 from './pages/Place10.jsx'
import Place11 from './pages/Place11.jsx'
import Place12 from './pages/Place12.jsx'
import Place13 from './pages/Place13.jsx'
import Place14 from './pages/Place14.jsx'
import Sefety from './pages/Sefety.jsx'
import About from './pages/About.jsx'




const router = createBrowserRouter (
  createRoutesFromElements(

    <Route path='/' element={<App/>}>
      <Route path='#' element={<Home/>}/>
      <Route path='' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='/home/place1' element={<Place1/>}/>
      <Route path='/place1' element={<Place1/>}/>
      <Route path='/place2' element={<Placetwo/>}/>
      <Route path='/place3' element={<Place3/>}/>
      <Route path='/place4' element={<Place4/>}/>
      <Route path='/place5' element={<Place5/>}/>
      <Route path='/place6' element={<Place6/>}/>
      <Route path='/place7' element={<Place7/>}/>
      <Route path='/place8' element={<Place8/>}/>
      <Route path='/place9' element={<Place9/>}/>
      <Route path='/place10' element={<Place10/>}/>
      <Route path='/place11' element={<Place11/>}/>
      <Route path='/place12' element={<Place12/>}/>
      <Route path='/place13' element={<Place13/>}/>
      <Route path='/place14' element={<Place14/>}/>
      <Route path='/home/place2' element={<Placetwo/>}/>
      <Route path='/home/place3' element={<Place3/>}/>
      <Route path='/home/place4' element={<Place4/>}/>
      <Route path='/home/place5' element={<Place5/>}/>
      <Route path='/home/place6' element={<Place6/>}/>
      <Route path='/home/place7' element={<Place7/>}/>
      <Route path='/home/place8' element={<Place8/>}/>
      <Route path='/home/place9' element={<Place9/>}/>
      <Route path='/home/place10' element={<Place10/>}/>
      <Route path='/home/place11' element={<Place11/>}/>
      <Route path='/home/place12' element={<Place12/>}/>
      <Route path='/home/place13' element={<Place13/>}/>
      <Route path='/home/place14' element={<Place14/>}/>
      <Route path='/safety' element={<Sefety/>}/>
      <Route path='/about' element={<About/>}/>
    </Route>

  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

