let a=[1,2,3,4,4,5,667,0,11,33,22]
let b=a.length;
let count=0;
for(let i=0;i<b;i++){
    if(a[i]==0){
        count++
        console.log("At index "+i+" zero present")
    }
}
if(count==0){
    console.log("this array is not duck number"); 
}

else{
    console.log("this array is duck number");
}