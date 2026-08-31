import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'
import NavBar from './NavBar'
import Header from '../Header'
import Props from './Props'
import Map from './Map'


function App() {
   let fruname1={name: "apple",origin: "banglore"}
   let fruname2={name: "banana",origin: "banglore"}
   let fruname3={name: "orange",origin: "banglore"}
   let price=[200,210,250]

   return <>
   {/* <Header/>

   <BrowserRouter>

    <NavBar/>

   <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter> */}

   {/* <Props name="apple" origin="delhi"  />                                      this is the props */}
   {/* <Props a={fruname1} b={price} />
   <Props a={fruname2} b={price} />
   <Props a={fruname3} b={price} /> */}

   <Map/>
   </>


}


export default App
