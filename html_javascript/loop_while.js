//1.-----------------------------------------------------------> Reverse Number
// let n=1435;
// while(n>0){
//     rem=n%10
//     console.log(rem);
//     n=parseInt(n/10)
// }

//2.-----------------------------------------------------------> sum of digits
// let n=1435;
// let sum=0
// while(n>0){
//     rem=n%10
//     console.log(rem);
    
//     sum=sum+rem
//     n=parseInt(n/10)
// }
// console.log(sum+" summ value");

//3.-----------------------------------------------------------> armstrong num
// let n=1234;
// temp=n;
// let cube=0;
// while(n>0){
//     rem=n%10;
//     console.log(rem);
//     cube=cube+rem**3;
//     n=parseInt(n/10);
// }
// console.log(cube+" cube value");
// if(temp==cube){
//     console.log("armstrong num");
// }

// else{
//     console.log("not armstrong num");
// }


// // 4.-----------------------------------------------------------> sum and product
// let n=59;
// temp=n;
// let sum=0;
// let product=1;
// while(n>0){
//     rem=n%10;
//     sum=sum+rem;
//     product=product*rem;
//     n=parseInt(n/10);
// }
// console.log(sum+" sum value");
// console.log(product+" product value");
// if((product+sum)==temp){
//     console.log("spy")
// }
// else{
//     console.log("not spy"); 
// }

// //5.-----------------------------------------------------------> palindrome
// let n=121;      
// let temp=n;
// let rev=0;
// while(n>0){
//     rem=n%10;                   
//     n=parseInt(n/10)        
//     rev=rev*10+rem      
// }
// console.log(rev)
// if(rev==temp){
//     console.log("palidrome");
// }

// else{
//     console.log("not palidrome");
// }

// //6.-----------------------------------------------------------> niven num
// let n=51;
// let temp=n;
// let rev=0;
// while(n>0){
//     rem=n%10;
//     n=parseInt(n/10)
//     rev=rev+rem
// }
// console.log(rev)
// // if(temp%rev==0){
// //     console.log("niven number");   
// // }
// // else{
// //     console.log(" not niven number");   

// // }
// console.log(temp%rev==0?"niven number":"not niven number")


// //7.-----------------------------------------------------------> 6 inside the num
// let n=1345;
// let count=0;
// while(n>0){
//     rem=n%10;
//     n=parseInt(n/10);
//     if(rem==6){
//         count++
//     }
// }
// console.log(count>0?"6 present":"6 not present");

// //8.-----------------------------------------------------------> num 4 count is?
// let n=1364445;
// let count=0;
// while(n>0){
//     rem=n%10;
//     n=parseInt(n/10);
//     if(rem==4){
//         count++
//     }
// }
// console.log(count>0?"4 present and count is:"+count:"6 not present");

//9. -----------------------------------------------------------> given prime is reveresed and prime or not check
let n=13;
let temp=n;
let rev=0;
while(n>0){
    rem=n%10;
    n=parseInt(n/10);
    rev=rev*10+rem
}
if(rev%2==0 && temp%2==0){
    console.log(temp+" & "+rev+" not twisted prime");
}

else{
    console.log(temp+" & "+rev+" twisted prime");
}
