import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'
import reac from './assets/react.svg'   //image import
import nod from './assets/hero.png'     //image import
import ang from './assets/vite.svg'     //image import

function App() {
 return <>
      <Card name="Rect" price="100rs" image={reac} show={true} />
      <Card name="Node" price="110rs" image={nod} show={true} />
      <Card name="Angular" price="120rs" image={ang} show={true} />
 
 </>
}

export default App
