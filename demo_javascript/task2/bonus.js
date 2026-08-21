let salary=Number(prompt("Enter the salary"))
if(salary>50000){
    salary=salary-((salary/100)*20)
    document.write("total is:"+salary)
}

else if(salary>30000){
    salary=salary-((salary/100)*10)
    document.write("total is:"+salary)
}

else{
    salary=salary-((salary/100)*5)
    document.write("total is:"+salary)
}