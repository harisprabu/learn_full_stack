import { useState } from "react"

let Display=()=>{
    const[name,setName]=useState("")

    return(
        <>
        <h1>task 1</h1>
            <input type="text"
            value={name}
            onChange={(e)=>{
                console.log(e)
                setName(e.target.value)
            }} />

            <p>{name}</p>

        </>
    )
}

export default Display