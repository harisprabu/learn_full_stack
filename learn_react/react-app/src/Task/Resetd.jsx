let Resetd=()=>{

    function click(){
        document.getElementById("ha").innerText="Welcome"
    }

    return <>
    <h1>task 3</h1>
        <h3 id="ha">Hello Team!</h3>
        <button onClick={click}>Click me</button>
        <br />  <br />
    </>
}

export default Resetd