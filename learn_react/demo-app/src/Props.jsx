import React from 'react'

const Props = (obj) => {
    // let{name,origin="tn"}={...obj}

    function Stat(){
        alert("soon")
    }
  return (
    <div>
        {/* <h1>fruit and origin: {name} and from {origin}</h1> */}
        <h1>fruit and origin: {obj.a.name} and from {obj.a.origin}</h1>
        <h4>price: {obj.b[0]},{obj.b[1]} and {obj.b[2]} </h4>
        <button onClick={Stat}>status</button>
    </div>
  )
  
}
export default Props