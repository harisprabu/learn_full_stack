
let CharCount=()=>{
        
    let Char=()=>{
        let faa=document.getElementById("fa").value;
        let da=faa.length
        document.getElementById("fah").innerText=da;
    }

    return <>
    <h1>task 4</h1>
        <input type="text" id="fa" onChange={Char}     
        />

        <p id="fah"></p>
    </>
}
export default CharCount