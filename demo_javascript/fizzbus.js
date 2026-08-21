let a=Number(prompt("Enter the number:"));
if((a%3==0) && (a%5==0)){
    document.write("fizzbus")
}

else if((a%5==0)){
    document.write("fizz")
}

else if((a%3==0)){
    document.write("bus")
}

else{
    document.write(a)
}