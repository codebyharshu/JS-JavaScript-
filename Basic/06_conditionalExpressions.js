//conditional Statement and Expressions
const prompt = require("prompt-sync")(); // only use for nodejs to use prompt

let a = prompt("enter the value of a = ") //prompt use for input

//if ---Statement
if(a>10){
    console.log("you number in greater then 10");  
}

//if-else  ---Statement
if(a<10){
    console.log("a in less then 10");    
}
else{
    console.log("a in greater then 10");    
}

//if-else-if  ---Statement
if(a <= 10){
    console.log("your mask in <=10");   
}
else if (a <=30){
    console.log("your mark in <=30");    
}
else if(a >30 && a <=40){
    console.log("your mark under 30 - 40");
}
else{
    console.log("your mark in greater then 40 ");
   
}

//Ternary Operator
let d = prompt("enter the value of d = ")
console.log("the value is", d <=10? "less then equle to 10": "great the 10");


//Swich case Expressions
let b = prompt("enter the value of b = ")
switch (true) {
    case b>10: console.log("greater then 10 ");
        break;
    case b<=10: console.log("less then 10");
    default:
        break;
}