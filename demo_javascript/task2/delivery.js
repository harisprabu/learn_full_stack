let amount=Number(prompt("Enter the amount:"))
if(amount>1000){
    document.write("Free DElivery")
}

else{
    amount+=50
    document.write("Delivery charge additional 50rs"+"<br>"+amount)

}