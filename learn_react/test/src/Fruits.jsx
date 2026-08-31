import React from 'react'

const Fruits = () => {
    let fru=["Apple","Orange","Mango","Banana","Grapes"]
    
  return (
    <div>
        <h1>Fruits</h1>
        <ul>{fru.map(i=>(
            <li>{i}</li>
        ))}
        </ul>

    </div>
  )
}

export default Fruits