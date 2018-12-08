
function printLeapYearStatus(){
    const year = new Date().getFullYear();
    if(year % 4 !== 0) console.log(`${year} is NOT a leap year.`);
    else if(year % 100 != 0) console.log(`${year} is a leap year`);
    else if(year % 400 != 0) console.log(`${year} is NOT a leap year.`);
    else console.log(`${year} IS a leap year`);
}


function isCurrentYearLeapYear(){
    const year = new Date().getFullYear();
    if(year%4 ===0) return false;
    else if(year%100 !=0) return true;
    else if(year%400 !=0) return false;
    else return true;
}
const dayInMonth = [31, isCurrentYearLeapYear() ?28 : 31, 31, 30, 31, 30, 31,31,30,31,30,31];

console.log(dayInMonth);
if(isCurrentYearLeapYear()) console.log('It is a leap year');

// getNextRainbowColor는 순수 함수가 아니다.
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo','violet'];
let colorIndex = -1;
function getNextRainbowColor(){
    if(++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
}

const pureGetNextRainbowColor = (function(){
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return function(){
        if(++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    };
})();

console.log(pureGetNextRainbowColor());

// const rainbowIterator = pureGetNextRainbowColor();
// setInterval(function(){
//    document.querySelector('.rainbow')
//        .style['background-color'] = rainbowIterator.next().value;
// });

//IIFE
setTimeout(function(){console.log('hello')}, 1500);
var i;
for(i=5; i>=0; i--){
    setTimeout(function(){
        console.log(i===0? "go": i);
    }, (5-i)*1000);
}

//IIFE 스코프 조정
function loopBody(i){
    setTimeout(function(){
        console.log(i===0?'go!':i);
    }, (5-i)*1000)
}
var i;
for(i=5; i>=0; i--){
    loopBody(i);
}

//IIFE 익명 함수로 호출
var i;
for(i=5; i>=0; i--){
    (function(i){
       setTimeout(function(){
           console.log(i===0?'go':i);
       }, (5-i)*1000)
    })(i);
}

for(let i=5; i>=0; i--){
    setTimeout(function(){
        console.log(i===0?'go!',i)
    },(5-i)*1000);
}