//Synchronous or blocking 
// line by line execution 

//Asynchronous or non-blocking 
//line by line execution not guaranteed 
// callbacks will fire

const fs = require("fs");
let text = fs.readFile("dele.txt","utf-8",(a,b)=>{
    console.log(a,b);
})
console.log("This is a message")