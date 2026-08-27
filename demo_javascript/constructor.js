let Add = function() {
    sum.a=5;
    sum.b=10;
    sum.c=function(d){
        return sum.a+sum.b+d;
    }
}

let sum=new Add();

console.log(sum.c(4))