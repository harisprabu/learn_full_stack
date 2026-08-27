import { useState } from "react"

let Age=()=>{
    const[name,setName]=useState({name:"",role:""})
}

let handleChange=(e)=>{
    const{name,value}=e.target
    setName({...name,[name]:value})
}

return(
    <>
    <input type="text"
        name="name"
        value={name.name}
        onChange={handleChange}
    />

    <input type="text"
        name="role"
        value={name.role}
        onChange={handleChange}
    />

    <p>{name.name}</p>
    <p>{name.role}</p>
    </>
)

export default Age

