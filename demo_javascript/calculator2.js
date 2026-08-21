let a=Number(prompt("Enter the number 1:"))
let b=Number(prompt("Enter the number 2:"))
let c=prompt("Enter the sign:")

// if(c=="add"){
//     d=a+b
//     document.write("Addition"+d)
// }

// else if(c=="sub"){
//     d=a-b
//     document.write("Subtraction"+d)
// }

// else if(c=="multi"){
//     d=a*b
//     document.write("multiply"+d)
// }

// else if(c=="div"){
//     d=a/b
//     document.write("division"+d)
// }

switch(c){
    case "add":
        d=a+b
        document.write("Addition"+d)
        break
    case "sub":
        d=a-b
        document.write("Subtraction"+d)
        break
    case "multi":
        d=a*b
        document.write("multiply"+d)
        break
    case "div":
        d=a/b
        document.write("division"+d)
        break

    default:
        document.write("None")
}