const prompt = require("prompt-sync")(); // only use for nodejs to use prompt

//Question 1= Use logical operators to find whether the age of a person lies between 10 and 20?
console.log("Question 1")

let a = prompt("Enter age = ")
if(a>10 && a<=20){
    console.log("The age of a person lies between 10 and 20")    
}
else{
    console.log("The age of a person not lies between 10 and 20")     
}

    //Question 2= Write a JS program to find whether a number is divisible by 2 and 3
console.log("Question 2")

let b = prompt("Enter Number = ")
if(b%2==0 && b%3==0){
    console.log("This number is divisible by 2 and 3");
}
else{
    console.log("this number is not divisible by 2 and 3")
}

//Question 3= Write a JS program to find whether a number is Divisible by either 2 or 3
console.log("Question 3")

let c = prompt("Enter number = ")
if(c%2==0 || c%3==0){
    console.log("This number is Divisible by Ether 2 or 3")
}
else{
    console.log("This number is not Divisible by ethier 2 or 3")
}
//Question 4= Print"You can Drive" or "You cannot Drive" based on age being greater then 18 using ternary operator
console.log("Question 4")

let d = prompt("Enter Your Age = ")
console.log(d>=18?"You can Drive": "You cannot Drive")