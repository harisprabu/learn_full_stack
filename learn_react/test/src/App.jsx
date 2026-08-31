import { useState } from 'react'
import Student from './Student'
import Show from './Show'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fruits from './Fruits'
import Home from './Home'
import About from './About'
import Details from './Details'
import PageDemo from './PageDemo'


function App() {
  
  let get={Name: "Harish", Age: 21, Course: "react"}
  let get2={Name: "dhamu", Age: 21, Course: "java"}
  let get3={Name: "vivek", Age: 21, Course: "javascript"}
  
  return (
    <>
    <Student details={get}/>
    <Student details={get2}/>
    <Student details={get3}/>
     
    <Show/>

    <Fruits/>


      <BrowserRouter>
      <PageDemo/>
      <Routes>
       
        <Route path='/About' element={<About/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Details' element={<Details/>}/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
