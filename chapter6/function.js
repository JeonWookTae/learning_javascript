
function getGreeting(){
    return "Hellow world";
}

data = getGreeting();
funcObj = getGreeting;
console.log(data, funcObj);

const f = getGreeting;
console.log(f());

const o = {};
o.func = getGreeting;
console.log(o.func());

const arr = [];
arr[1] = getGreeting;
console.log(arr[1](), arr[0]);


function func(){
    console.log(`f 내부: x=${x}`);
    x = 5;
    console.log(`f 내부: x=${x}(할당 후)`);
}
let x =3;
console.log(`f를 호출하기 전: x=${x}`);
func(x);
console.log(`f를 호출한 후: x=${x}`);


// python이랑 변수 스코프가 비슷한듯.
function ff(o){
    o.message = 'f 안에서 수정됨';
}
let oo = {
    message : '초기 값'
};
console.log(oo);
ff(oo);
console.log(oo);


// 익명함수
const af = function(){
  //
};
const g = function gf(){
    //
};

const gg = function ff(stop){
    if(stop) console.log('f stop');
    // ff(true) // 응 스택 풀나~
};
gg(false);



// 화살표기법
const f1 = function(){return 'hellow!'};
const f1_1 = () => 'hellow!';
console.log(f1());
const f2 = function(name){return `hellow ${name}`};
const f2_1 = name => `hellow ${name}`;
console.log(f2_1('123'));


// 객체의 프로퍼티 함수
const o1 = {
    name : 'Wallace',
    bark : function() {return 'woof!'}
};
const o2 = {
    name : 'Wallace',
    bark() {return 'woof!'}
};


// this
const o3 ={
    name : 'wallance',
    speak() {return `My name is ${this.name}`}
};
console.log(o3.speak()); // My name is wallance

const speak = o3.speak;
console.log(speak === o3.speak);
console.log(speak());

// 오류가 발생함. 호출 했을 때 this를 정하기 때문에 this가 다른 곳에 묶인 다고 함.
// const o4 = {
//     name : 'Julie',
//     greetBackwards: function() {
//         function getReverseName() {
//             let nameBackwards = '';
//             for(let i = this.name.length-1; i>=0; i--){
//                 nameBackwards += this.name[i];
//             }
//             return nameBackwards;
//         }
//         return `${getReverseName()} si eman ym ,olleH`;
//     }
// };
// console.log(o4.greetBackwards());


const o4 = {
    name : 'Julie',
    greetBackwards: function() {
        const self = this;
        function getReverseName() {
            let nameBackwards = '';
            for(let i = self.name.length-1; i>=0; i--){
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    }
};
console.log(o4.greetBackwards());

const bruce = {name:"bruce"};
const madeline = {name:"madeline"};
function greet(){
    return `hellow, i am ${this.name}`;
}
console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthYear, occuption){
    this.birthYear = birthYear;
    this.occuption = occuption;
}

update.call(bruce, 1949, 'singer');
console.log(bruce);
update.call(madeline, 1942, 'actress');
console.log(madeline);

update.apply(bruce, [1995, 'actor']);
console.log(bruce);
update.apply(madeline, [1918, 'writer']);
console.log(madeline);

const arrMath = [2,3,-5,15,7];
console.log(Math.min.apply(null, arrMath));
console.log(Math.max.apply(null, arrMath));
