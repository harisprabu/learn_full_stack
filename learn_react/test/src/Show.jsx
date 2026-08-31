import React, { useState } from 'react'

const Show = () => {

  const[details,setDetails]=useState({
    Name: "",
    Age: "",
    Duration: ""
  });

  function dis(){
    setDetails({
      Name: "haris",
      Age: 21,
      Duration: "6hrs"
    })}

  return (
    <div>
        <h1>{details.Name}</h1>
        
        <h1>{details.Age}</h1>
        <h1>{details.Duration}</h1>
        <button onClick={dis}>Show/hide</button>

    </div>
  )
}

export default Show