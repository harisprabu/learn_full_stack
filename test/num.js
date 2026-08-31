let n=-100;
let temp=n;
while(temp>0){
    let a=Math.floor(temp%10);
    if(a>0){
        console.log(a+" is positive number")
    }
    else if(a==0){
        console.log(a+" zero")
    }

    temp=Math.floor(temp/10);
}
if(temp<0){
    console.log(n+" negative number")
}