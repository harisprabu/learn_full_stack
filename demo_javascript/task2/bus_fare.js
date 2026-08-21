let distance=Number(prompt("Enter the distance:"))
price=0
if(distance<=10){
    price=20
    document.write("your price"+price)
}

else if(distance<=50 && distance>10){
    price=50
    document.write("your price"+price)
}

else{
    price=100
    document.write("your price"+price)
}