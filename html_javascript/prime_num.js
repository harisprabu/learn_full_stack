// // 1. prime number
// for(j=1;j<=100;j++){
//     let count=0;
//     for(let i=2;i<j;i++){
//         if(j%i==0){
//             count++;
//         }
//     }
//     if(count>0){
//         console.log(j+" not prime number")
//     }
//     else{
//         console.log(j+" prime number"); 
//     }
// }

// //2. Perfect number
// for(j=1;j<=100;j++){
//     let sum=0;
//     for(let i=1; i<j; i++){
//         if(j%i==0){
//             sum+=i;
//         }
//     }
    
//     if(sum==j){
//         console.log(j+" perfect number")
//     }
    
//     else{
//         console.log(j+" not perfect number")
//     }
// }


// // 3. Armstrong num
// for(let n=1;n<=1000;n++){
//     temp=n;
//     let cube=0;
//     while(n>0){
//         rem=n%10;
//         console.log(rem);
//         cube=cube+rem**3;
//         n=parseInt(n/10);
//     }
//     if(temp==cube){
//         console.log("armstrong num");
//     }
// }

//4. even or odd count

// let count=0;
// for(j=1;j<=10;j++){
//     for(let i=2;i<j;i++){
//         if(j%i==0){
//             count++;
//         }
//     }
//     if(count>0){
//         console.log(count)
//     }
// }

// let count_num=0;
// for(j=2;j<=100;j++){
//     let count=0;
//     for(let i=2;i<j;i++){
//         if(j%i==0){
//             count++;
//         }
//     }
//     if(count>0){
//         continue
//     }
//     else{
//         console.log(j+"prime number")
//         count_num++
//     }
// }
// console.log("count of prime number:", count_num);


// // armstrong number sum
// let count = 0;
// let sum=0;
// for (let n = 100; n <= 1000; n++) {
//     let temp = n;
//     let num = n;
//     let cube = 0;
//     while (num > 0) {
//         let rem = num % 10;
//         cube = cube + rem ** 3;
//         num = parseInt(num / 10);
//     }
//     if (temp == cube) {
//         console.log(temp + " is an Armstrong number");
//         count++;
//         sum=sum+temp
//     }
// }
// console.log("Count Armstrong numbers:", count);
// console.log("total Armstrong numbers:", sum);


// // palindrome from 111 to 130
// for(let n=111; n<=130; n++)  {
//     let temp=n;
//     let num=n;
//     let rev=0;
//     while(num>0){
//         rem=num%10;                   
//         num=parseInt(num/10)        
//         rev=rev*10+rem      
//     }
//     if(rev==temp){
//         console.log("palidrome " + rev);
//     }
// }   


