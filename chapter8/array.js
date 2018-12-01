// 배열 리터럴
const arr1 = [1,2,3];
const arr2 = ['one', 2, 'three'];
const arr3 = [[1,2,3], ['one',2 ,'three']];
const arr4 = [
    {name:'123', type:'string'},
    [
        {name:44, type:'int'},
        {name:44 , type:'string'}
    ],
    1,
    function(){return 'array'},
    'three'
];

// 배열 요소 접근하기
arr1[0];
arr1[2];
arr4[1][0];

// 배열 길이
arr1.length;
arr4.length;
arr4[1].length;

// 배열 길이 늘리기
arr1[4] = 5;
console.log(arr1);

// 배열의 현재 길이보다 큰 인덱스에 접근하는 것만으로는 배열의 길이는 늘어나지 않습니다.
arr2[10];
arr2.length;

// Array 생성자(거의 사용하지 않습니다.)
const arr5 = new Array();
const arr6 = new Array(1,2,3);

// 배열의 처음이나 끝에서 요소 하나를 추가하거나 제거하기
const t_arr1 = ['b', 'c', 'd'];
t_arr1.push('e');
console.log(t_arr1);
// 마지막 제거하기
t_arr1.pop();
// 앞에 추가하기
t_arr1.unshift('a');
// 앞에 제거하기
t_arr1.shift();

// 배열 일부 불러오기
const t_arr2 = [1,2,3,4,5];
t_arr2.slice(2);
t_arr2.slice(2,4);
console.log(t_arr2.slice(1, -2));


// 배열 여러 요소 추가하기
const t_arr3 = [1,2,3];
const concat_arr1 = t_arr3.concat(4,5,6);
console.log(concat_arr1);
const concat_arr = t_arr3.concat([4,5,6]);
console.log(concat_arr);
const concat_arr2 = t_arr3.concat(4,[5,6]);
console.log(concat_arr2);
const concat_arr3 = t_arr3.concat([4,[5,6]]);
console.log(concat_arr3);

// 임의의 위치에 요소 추가하거나 제거하기
const t_arr4 = [1,5,7];
t_arr4.splice(1,0,2,3,4);
console.log(t_arr4);


// 배열 안에서 요소 교체하기
const t_arr5 = [1,2,3,4];
t_arr5.copyWithin(1,2);
console.log(t_arr5);
t_arr5.copyWithin(2,0,2);
console.log(t_arr5);
t_arr5.copyWithin(0,-3,-1);
console.log(t_arr5);

// 배열 정렬
const sort_arr = [{name:'Suzan'}, {name:'Jim'},
    {name:'Trevor'}, {name:'Amanda'}];
sort_arr.sort();
console.log(sort_arr.sort((a,b)=> a.name > b.name)); // name property의 알파벳 순으로 정렬
console.log(sort_arr.sort((a,b)=> a.name[1]<b.name[1])); // name property의 두번째 글자 알파벳 역순 정렬

// 배열 검색
const o = {name : 'Jerry'};
const index_arr = [1,5,'a',o,true,5,[1,2],'9'];
console.log(index_arr.indexOf(5)); // 1
console.log(index_arr.lastIndexOf(5)); // 5
console.log(index_arr.indexOf({name:'Jerry'})); // -1
console.log(index_arr.indexOf(o)); // 3
console.log(index_arr.indexOf(o,4)); // 4번 째 index부터 탐색

const index_arr2 = [{id:5, name:'Judith'}, {id: 7, name:"Francis"}];
console.log(index_arr2.findIndex(o => o.id === 5)); // 0
console.log(index_arr2.findIndex(o => o.name === 'Judith')); // 0
console.log(index_arr2.find(o=>o.id===5)); // { id: 5, name: 'Judith' }
const index_arr3 = [1,17,16,5,4,16,10,3,90];
console.log(index_arr3.find((x, i)=> i > 2 && Number.isInteger(Math.sqrt(x))));

class Person{
    constructor(name){
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const jamie = new Person('Jamie'),
    juliet = new Person('juliet'),
    peter = new Person('perter'),
    jay = new Person('jay');
const class_arr = [jamie, juliet, peter, jay];
console.log(class_arr.find(p => p.id === juliet.id)); // id를 직접 비교하는 방법
console.log(
    class_arr.find(function(p){
        return p.id === this.id
    }, juliet)
); // 매개변수를 이용하는 방법

const some_arr = [5,7,1,2,22,15];
console.log(some_arr.some(x=>x%2 ===0));
const every_arr = [4, 16, 8];
console.log(every_arr.every(x=>x%2===0));


const cart = [{name: 'widget', price:9.95}, {name:'gadget', price:22.95}];
const name = cart.map(x=> x.name);
console.log(name);
const price = cart.map(x=> x.price);
console.log(price);
const discountPrice = price.map(x=> x*0.8);
console.log(discountPrice);

const item = ['widget', 'gadget'];
const prices = [9.95, 22.95];
const merge = item.map((x,i)=>({name:x,price:prices[i]}));
console.log(merge);

const cards = [];
for(let suit of ['H', 'C', 'D', 'S']){
    for(let value =1; value<13; value++){
        cards.push({suit, value})
    }
}
const cardsFilter = cards.filter(c=> c.value === 2);
console.log(cardsFilter);
const cardsFilter2 = cards.filter(c=>c.suit === 'D');
console.log(cardsFilter2);


// map
function cardToString(c){
    // 좋은 방법은 아닌듯
    const suit = {'H':'\u2665', 'C':'\u2663','D':'\u2666','S':'\u2660'};
    const values = {1:'A', 11:'J', 12:'Q', 13:'K'};
    for(let i=2; i<=10; i++){
        values[i] = i
    }

    return values[c.value] + suit[c.suit];
}

const cards_string = cards.filter(c=>c.value===2)
    .map(cardToString);
console.log(cards_string);

// reduce
const reduce_arr = [5,7,2,4];
const sum = reduce_arr.reduce((a,x)=>a += x, 0);
console.log(sum);

const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
const stats = data.reduce((a,x)=> {
    a.N++;
    let delta = x - a.mean;
    a.mean += delta/a.N;
    a.M2 += delta*(x-a.mean);
    return a;
    }, {N:0, mean:0, M2:0}
);
if(stats.N > 2){
    stats.variance = stats.M2 / (stats.N -1);
    stats.stdev = Math.sqrt(stats.variance);
}
console.log(stats);

// 배열 삭제
delete reduce_arr[1]; // [...,undefined,...]
delete reduce_arr;

const string_arr = ['1', 'hellow'];
console.log(string_arr.join(' '));
