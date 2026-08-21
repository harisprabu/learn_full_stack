let bmi=Number(prompt("Enter the bmi:"))
if(bmi<18.5){
    document.write("you are underweight")
}

else if(bmi<25 && bmi>18.5){
    document.write("you are normal")

}

else if(bmi<30 && bmi>25){
    document.write("You are overweight")
}

else{
    document.write("You are obese")
}