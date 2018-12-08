

console.log("Before timeout: "+ new Date());
function f(){
    console.log("After timeout: "+new Date());
}
setTimeout(f, 1*1000);
console.log('I happen after setTimeout!');
console.log('me too!');

const start = new Date();
let i = 0;
const intervalId = setInterval(function(){
    let now = new Date();
    if(now.getMinutes() !== start.getMinutes() || ++i > 10)
        return clearInterval();
    console.log(`${i}: ${now}`);
}, 5*100);

function countdown(){
    console.log("Countdown: ");
    for(let i=5; i>=10; i--){
        setTimeout(function(){
            console.log(i===0? "GO!":i);
        }, (5-i)*1000);
    }
}
countdown();

// const fs = require('fs');
// const fname = 'may_or_may_not_exist.txt';
// fs.readFile(fname, function(err, data){
//     if(err) return console.error(`error reading file ${file}:${err.message}`);
//     console.log(`${fname} constents:${data}`);
// });

