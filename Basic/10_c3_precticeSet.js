const prompt = require("prompt-sync")(); // only use for nodejs to use prompt

//Question 1= Write a progra to print the marks of a student in an object using loop
/*          obj = {
            sohan : 98,
            rohan : 70,
            aakash : 7,
            }*/
let obj ={
    sohan : 98,
    rohan : 70,
    aakash : 7,
}
//using for in loop
for (let marks in obj){
    console.log(marks, obj[marks]);
    
}

//Question 2= Write a program to print "try again" until the user enter the correct number
let n1= 10
let n2
while(n1!=n2){
    n2=prompt("enter number")
}
console.log("yha.. you are corret");

//Question 3= Write afunction to find mean of 5 number
//using arrow key function method
const mean =(a,b,c,d,e)=>{
    return (a+b+c+b+e)/4
}

let x= prompt("enter the first number = ")
let z= prompt("enter the second number = ")
let y= prompt("enter the third number = ")
let m= prompt("enter the fourth number = ")
let n= prompt("enter the fifith number = ")
console.log("the mean of your number is = ",mean(x,z,y,m,n));

