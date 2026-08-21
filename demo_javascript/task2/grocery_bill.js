let price=Number(prompt("Enter the price:"))
let items=Number(prompt("Enter the items:"))
tot=price*items
if(items>=5){
    discount=tot-((tot/100)*15)
    document.write("Total amount is:"+ discount)
}

else if(items==3 || items==4){
    discount=tot-((tot/100)*10)
    document.write("Total amount is:"+ discount)
}

else{
    document.write("total amount is:"+tot)
}