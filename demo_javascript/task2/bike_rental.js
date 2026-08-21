let rent=Number(prompt("Enter the time:"))
let hour=50
let add=40
if(rent<=5){
    tot=rent*hour
    document.write("Price is:"+tot)
}

else if(rent>5){
    main_price=5*hour
    time=rent-5;
    tot=(time*add)+main_price
    document.write("Price is:"+tot)
}