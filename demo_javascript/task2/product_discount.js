let amount=Number(prompt("Enter the amount:"))
let discount=0
if(amount>5000){
    discount=amount-((amount/100)*20)
    document.write(" total amount is:"+discount)
}

else if(amount>2000 && amount<=5000){
    discount=amount-((amount/100)*10)
    document.write(" total amount is:"+discount)
}

else{
    document.write(" total amount is:"+amount)
}