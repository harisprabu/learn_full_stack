function hi(){
let age=document.getElementById("age").value;
let salary=document.getElementById("salary").value;
if(age>=21 && salary>=25000){
    document.getElementById(dis).innerHTML="accepted";
}

else{
    document.write("Rejected")
}
}