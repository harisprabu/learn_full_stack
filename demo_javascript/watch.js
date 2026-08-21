//watch code
document.write("<h1>Watch code</h1>");
let price=Number(prompt("enter the price:"))
let units=Number(prompt("enter the quantity:"))

let unit_price=price*units;                                         //total price of units
document.write("total price:"+unit_price+"<br>"); 

let gst=unit_price/100*18;
let gst_amount=gst+unit_price;
document.write("total price includes gst:"+gst_amount+"<br>");             //includes gst

let total_discount=unit_price-(unit_price/100*5);
document.write("total price includes discount:"+total_discount+"<br>");  

