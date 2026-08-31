//basic array

// let a=[1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }

//even numbers
// let a=[1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         console.log("even number "+ a[i])
//     }
// }


//prime
// let a=[1,2,3,4,5,6,7,8,9,10]
// count=0;
// for(let i=0;i<a.length;i++){
//     b=a[i]
//     for(i=2;i<b;i++){
//         if(b%i==0){
//             count++            
//         }
//     }

//     if(count>0){
//         console.log(b+" it is not prime");   
//     } 
//     else{
//         console.log(b+" it is prime");  

//     }  
// }



//factorial
let a=[10,5,8,9,4,11];
let b= a.sort((x,y)=>x-y)
console.log("array sorted: "+b)
let c=b.length-1
console.log("least value: "+ b.slice(0,1))
console.log("highest value: "+b.slice(c))