for(let a=2; a<=20; a++){
    let i=a;
    let count=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==0){
        console.log(i+" prime number")
    }
}