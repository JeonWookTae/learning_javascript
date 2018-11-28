
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


