import React from 'react'

const Student = ({details}) => {
    let {Name,Age,Course}={...details}
  return (
    <div>
        <h1>Name: {Name}</h1>
        <h3>Age: {Age}</h3>
        <h3>Course: {Course}</h3>
        <hrc />
    </div>
  )
}

export default Student