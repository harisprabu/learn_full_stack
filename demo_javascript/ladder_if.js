// let ug=Number(prompt("Enter the ug:"))
// let pg=Number(prompt("Enter the pg:"))
// let phd=Number(prompt("Enter the phd:"))
// let degree='';

// if(ug==1){
//     degree+='ug'
// }

// if(pg==1){
//     degree+='pg'
// }

// if(phd==1){
//     degree+='phd'
// }

// document.write(degree)  



// let num=Number(prompt("Enter the number"))

// if(num>0){
//     document.write("+1")
// }

// else if(num<0){
//     document.write("-1")
// }

// else if(num==0){
//     document.write(0)
// }

// else{
//     document.write("wrong number")
// }



// let x=Number(prompt("Enter the x value:"))
// let y=Number(prompt("Enter the y value:"))

// if(x>0 && y>0){
//     document.write("1st quadrant")
// }

// else if(x>0 && y<0){
//     document.write("2nd quadrant")
// }

// else if(x<0 && y<0){
//     document.write("3rd quadrant")
// }
// else if(x<0 && y>0){
//     document.write("4th quadrant")
// }


// degree=Number(prompt("Enter the weather:"));

// if(degree<0){
//     document.write("Freezing weather");
// }
// else if(degree>=10 && degree>=0){
//     document.write("very cold weather");
// }
// else if(degree>10 && degree>=20){
//     document.write("cold weather");
// }
// else if(degree>20 && degree>=30){
//     document.write("normal weather");
// }
// else if(degree>30 && degree>=40){
//     document.write("hot weather");
// }
// else if(degree>=40){
//     document.write("very hot weather");
// }


// let maths=Number(prompt("Enter the mark:"));
// let physics=Number(prompt("Enter the physics:"));
// let chemistry=Number(prompt("Enter the chemisty:"));
// let computer=Number(prompt("Enter the computer:"));
// let english=Number(prompt("Enter the english:"));

// let tot=maths+physics+chemistry+computer+english;
// let avg=tot/500;

// if(tot>450 && tot>=500){
//     document.write("grade A")
// }

// else if(tot>450 && tot>=400){
//     document.write("grade B")
// }

// else if(tot>350 && tot>=400){
//     document.write("grade C")
// }

// else if(tot<=350){
//     document.write("grade E")

// }

// document.write("<br> total marks:"+tot)


// let TotalSalary=15000;
// let totDays=26;
// let workday=Number(prompt("Enter the days:"))
// let exp=Number(prompt("Enter the experience:"))
// let percentage=TotalSalary/100
// let incentive=percentage*5
// let oneday=TotalSalary/totDays;
// let salary=oneday*workday;
// if(exp>=5){
//     salary=salary+incentive
//     document.write("total salary:"+salary)
// }
// else{
//     document.write("total salary:"+salary)
// }

// let product_name=prompt("Enter the name:")
// let product_price=Number(prompt("Enter the price:"))
// let product_unit=Number(prompt("Enter the quantity:"))

// let total_amount=product_price*product_unit

// if(total_amount>=10000){
//     discount=(total_amount/100)*25
//     document.write("Price with 25 percent discount"+(total_amount-discount))
// }
// else if(total_amount>=5000 && total_amount<10000){
//     discount=(total_amount/100)*15
//     document.write("Price with 15 percent discount"+(total_amount-discount))
// }
// else if(total_amount>=2000 && total_amount<5000){
//     discount=(total_amount/100)*10
//     document.write("Price with 10 percent discount"+(total_amount-discount))
// }

// else if(total_amount<2000){
//     document.write("original price"+total_amount)
// }

// let balance=10000;
// let operation=prompt("Your operation:")

// if(operation==1){
//     document.write("your balance:"+balance)
// }

// else if(operation==2){
//     let amount=Number(prompt("Enter the amount to add:"))
//     balance+=amount
//     document.write("updated balance is"+balance)
// }

// else if(operation==3){
//     let amount=Number(prompt("Enter the amount to withdraw:"))
//     balance-=amount
//     document.write("updated balance is"+balance)
// }

let role=(prompt("Enter the role:"))

if (role=="admin"){
    document.write("Full access provided")
}

else if(role=="trainer"){
    document.write("Training access provided")
}

else if(role=="student"){
    document.write("LMS access provided")
}

else{
    document.write("No access")
}

