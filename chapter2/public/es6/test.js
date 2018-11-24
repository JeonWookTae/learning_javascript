'use strict';
// es6 기능: 블록 스코프 변수 선어
const sentences = [
    {subject: 'javascript', verb:'is', object:'great'},
    {subject: 'elephants', verb:'are', object:'large'}
];

// es6 기능 : 객체 분해
function say({subject, verb, object}){
    console.log(`${subject} ${verb} ${object}`);
}
for(let s of sentences){
    say(s);
}