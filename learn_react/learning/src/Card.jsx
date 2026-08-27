function Card(get){
    let a="hello"

    if(get.show==true){
        return <div className="cardName">
            <img src={get.image} alt="" className="images" />
            <h1>{get.name}</h1>
            <p>{get.price}</p>
        </div>
        
    }

    else{
        return <div className="cardName">
            <h1>{a}</h1>
        </div>
    }

}


export default Card