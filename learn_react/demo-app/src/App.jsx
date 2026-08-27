import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'
import NavBar from './NavBar'
import Header from '../Header'


function App() {
   return <>
   <Header/>

   <BrowserRouter>

    <NavBar/>

   <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
   </>


}


export default App
