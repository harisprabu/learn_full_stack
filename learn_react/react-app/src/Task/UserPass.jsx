import { useState } from "react"

let UserPass=()=>{
    const[user,SetUser]=useState("")

    let log=()=>{
        let a=document.getElementById("name").value;
        alert(`hello `+ a)
    }


    return <>
        <h1>task 5</h1>
        <input type="text" id="name"

        />
        <input type="text"
        />
        <button onClick={log}>login</button>

    </>
}

export default UserPass