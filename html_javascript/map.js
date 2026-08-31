let arr=[4,55,33,32,2,34,5,7,1]
// let ar=arr.map(n=>n+5)
// let sq=arr.map(n=>n**2)
// let cube=arr.map(n=>n**3)
// console.log(ar);
// console.log(sq);
// console.log(cube);


// // normal method
// let arr=[4,55,33,32,2,34]
// b=[]
// for(let i=0; i<arr.length; i++){
//     let c=arr[i]+5
//     b.push(c)
// }
// console.log(b);

// // map
// arrsq=[]
// arrcube=[]
// let ar=arr.map(n=>{
//     let sq=n**2
//     let cube=n**3
//     arrsq.push(sq)
//     arrcube.push(cube)
// })
// console.log(arrsq);
// console.log(arrcube);


//-------------------------------------------------------------------> forEach
// arr.forEach((i)=>{
//     if(i%2==0){
//         console.log(i+" positive number")
//     }
// })


// arr.forEach((i)=>{
//     let num=i;
//     count=0;
//     for(let j=2; j<i; j++){
//         if(i%j==0){
//             count++
//         }
//     }
//     if(count==0){
//         console.log(num+" it prime number"); 
//     }
// })


// //-----------------------------------------------------------------> filter
// temp=arr.filter(i=>{
    
//     if(i%2==0){
//         console.log(i+" it is even num");  
//     }
//     else{
//         console.log(i+" it is odd num");  
//     }
//         }
// )


// let tempeven=arr.filter(i=>i%2==0)
// console.log(tempeven," it is even num");

// let tempodd=arr.filter(i=>i%2!=0)
// console.log(tempodd," it is odd num");



// let score=[30,55,11,50,81,99,70]

// let mark=score.filter(i=>i>80)
// console.log(mark, " these are above 80")


// let marksixty=score.filter(a=> a<=60 && a>=30)
// console.log(marksixty, " marks above 30 to 60")

// let mapfilter=score.filter(b=> b<=60).map(b=> b+10)
// console.log(mapfilter)

// let mafi=mapfilter.filter(c=> c<=35)
// console.log(mafi)


// //---------------------------------------------------------------------------> reduce

// let score=[30,55,11,50,81,99,70]

// let mark=score.filter(i=>i>80)
// console.log(mark, " these are above 80")

// let red=mark.reduce((sum,i)=>sum+i)
// console.log(red);

// let redco=mark.reduce((count)=> count+1,0)
// console.log(redco);

// let avg=red/redco
// console.log(avg)



let arrr=[33,22,44,11,99,32,1,23,9]
let asc=arrr.reduce((a,b)=> a>b? a:b)
let desc=arrr.reduce((a,b)=> a<b? a:b)

console.log(asc+" maximum score")
console.log(desc+" min score")