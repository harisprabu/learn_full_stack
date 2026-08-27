import { useState } from "react";

function Count(){
    // let num=0;

    const[num,setcount]=useState(0);
    const[num1,setcount1]=useState(100);

    let hi=()=>{
        setcount(num+1)
    }

    let he=()=>{
        setcount1(num1-1)
    }

    return <>        
        <button onClick={hi}> Click {num} </button>
        <button onClick={he}> Click {num1} </button>
    </>
}

export default Count