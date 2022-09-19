const prompt = require('prompt-sync') ({sigint: true});

let pinCode = 1234;

let enterCode = Number(prompt("PLease enter pin code: "));

if(enterCode === 1234){
    console.log("Success")
} else if(enterCode !== 1234){
    console.log("Failure to open lock box")
}