import React from 'react'

const Map = () => {
    let fruList=["apple","orange","mango","banana"]

  return (
    <div>
        <ul>
            {fruList.map(fruits=>
                <li>{fruits}</li>
                // <li>{fruits},{index},{array}</li>
            )}
        </ul>
    </div>
  )
}

export default Map