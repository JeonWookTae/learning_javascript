
function rand(m,n){
    return m + Math.floor((n-m+1)*Math.random());
}

// 크라운 앤 앤커 게임의 여섯 그림 중 하나에 해당되는 문자열을 무작위로 반환합니다.
function randFace(){
    return ['crown', 'anchor', 'heart', 'spade', 'clob', 'diamond']
        [rand(0,5)]; // 이런 것도 가능하네...
    // ['crown', 'anchor', 'heart', 'spade', 'clob', 'diamond'][rand(0,5)];
    // 이렇게 쓴거랑 똑같다 보면됨. 그냥 문법 지원 해주나 봄.
}

let funds = 50;
let round = 0;

while(funds > 1 && funds < 100){
    round++;
    console.log(`round ${round}`);
    console.log(`\tstarting funds: ${funds}p`);

    let bets = {crwon:0, anchor:0, heart:0,
    spade:0, club:0, diamond:0};
    let totalBet = rand(1, funds);
    if(totalBet === 7){
        totalBet = funds;
        bets.heart = totalBet;
    }
    else{
        let remaining = totalBet;
        do{
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        }while(remaining > 0)
    }
    funds = funds - totalBet;

    const hand = [];
    for(let roll=0; roll<3; roll++){
        hand.push(randFace())
    }
    console.log(`\thand: ${hand.join(', ')}`);

    let winnings = 0;
    for(let die=0; die <hand.length; die++){
        let face = hand[die];
        if(bets[face]>0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funds: ${funds}`);

// for in loop
const player = {name:'Thomas', rank:'Midshipman', age:25};
for(let prop in player){
    if(!player.hasOwnProperty(prop)) continue;
    console.log(prop+': '+player[prop])
}


//for of loop
const hand = [randFace(), randFace(), randFace()];
for(let face of hand){
    console.log(face)
}


// loop
let i = 0;
const bigArrayOfNumbers = [10,20,23,4,1,4,2,1,4,0];

function isPrime(number){
    for(let t =2; t<number; t++){
        if(number%t === 0) return false
    }
    return true
}

for(; bigArrayOfNumbers.length; i++){
    if(isPrime(bigArrayOfNumbers[i])) break;
}
if(i === bigArrayOfNumbers.length) console.log('No Prime numbers');
else console.log(`First prime number position ${i}`);


//5장 해체 할당
const obj = {b:2, c:3, d:4};
const {a,b,c} = obj;

const arr = [1,2,3];
let [x,y] = arr;
console.log(x,y);


// 3항 연산자
if(isPrime(13)){
    label = 'prime';
}else{
    label = 'non-prime';
}

label = isPrime(13) ? 'prime': 'non-prime';
console.log(label);