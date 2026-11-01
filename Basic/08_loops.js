//Types for loop
/*
for loop
for in loop
for of loop
while loop
do-while loop
*/

//for loop
for(let i = 1; i <=10; i++){
    console.log(i);   
}
//for in loop /// only use for object,arrey etc
let obj={
    class:10,
    collage:9,
}
for(let i in obj){
    console.log(i,obj[i]);  
}

//for of loop /// only use for arrey etc.
let a="harsh"
for(let i of a){
    console.log(i);
    
}

//while loop
let r = 10
let b = 100
while(r<b){
    console.log(r);   
    a++ 
}

//do-while loop
let c = 0
let d = 10
do {
    console.log(c);  
      c++
} while (c<d);
