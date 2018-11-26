
let current_temp = 22;
console.log(`${current_temp}`);
current_temp = 22.5;
console.log(`${current_temp}`);

// let target_temp; //이렇게 초기값 없이도 선언 가능하다.
let target_temp, room1 = "conference_room_a", room2 = 'lobbay';
console.log(`${target_temp}, ${room1}, ${room2}`);

// 상수는 ES6에서 새로 생겼습니다.
// 절대적인 규칙은 아니지만 상수에는 대문자와 스네이크 표기법을 사용합니다.
const ROOM_TEMP = 21.5, MAX_TEMP = 30;

const small = Number.EPSILON; //1에 더했을 때 1과 구분되는 결과를 만들 수 있는 작은 값. 2.2e-16이 근사값
const bigInt = Number.MAX_SAFE_INTEGER; //표현할 수 있는 가장 큰 정수
const max = Number.MAX_VALUE; // 표현할 수 있는 가장 큰 숫자
const min = Number.MIN_SAFE_INTEGER; // 표현 할 수 있는 가장 작은 정수
const nInf = Number.NEGATIVE_INFINITY; // -Inf
const nan = Number.NaN; // NAN
const inf = Number.POSITIVE_INFINITY; // Inf

// 이스케이프
const dialog = "He looked up and said \"don't do that!\" to Max."
// 역 슬레이스 이스케이프 처리

const multiline = `line1
line2`;
// 백틱 이용해서 다중 라인 표현 가능

const result = 3 + '30'; // output -> '330' 3이 문자열로 바뀜
const result2 = 3*'30'; // output -> 90 30이 숫자로 바뀜

// boolean
let heating = true;
let cooling = false;

//symbol - 처음 보는것 같은데데데데데데
const RED = Symbol("The color of a sunset");
const ORANGE = Symbol("The color of a sunset");
console.log(RED === ORANGE); // false 심볼은 모두 다릅니다.
// 여긴 === 로 사용하네

//let current_temp;
// const target_temp = null; // null은 아직 모르는 값입니다.
current_temp = 19.5;
current_temp = undefined;
// 변수를 선언하고 명시적으로 값을 할당하지 않으면 그 변수에는 기본적으로 undefinded가 할당 됨니다.

const obj ={}; // 빈 객체
obj.color = "yellow"; // 프로퍼티는 키와 값으로 구성된다.

obj['not an identifier'] = 3;
console.log(`${obj['not an identifier']} ${obj['color']}`);

// 심볼 프로퍼티에 접근 할 때도 대괄호 사용
const SIZE = Symbol();
obj[SIZE] = 8;
console.log(`${obj[SIZE]}`);
console.log(obj);

const sam1 = {
    name: 'Sam',
    age: 4,
};
console.log(sam1);

const sam2 = {
    name : 'sam2',
    classification: {
        class : 'mamalia'
    }
};

// dictionary, json 처럼 접근 가능
console.log(sam2.classification.class);
console.log(sam2['classification'].class);
console.log(sam2['classification']['class']);

// 배열
const a1 = [1,2,3,4];
const a2 = [1, 'two',3 , null, '하하']; // 배열은 여러가지 타입으로 선언가능. 물론 객체 타입도 가능
a2.length; // length method도 이슴^^ 자바랑 비슷하게 있을껀 다 있는 듯
console.log(a2[a2.length]);
console.log(a2[-1]); // 이거 됨. 근데 진짜 -1 번째 index 찾는 듯... python하곤 이런거 다름.
// 추가로 슬라이스 기능 지원 안함^^ 좀 더 공부하다 보면 나오겠지... for 문으로 배열 핸들링 하기 싫은데...

const arr = [1,2,'c',4,5];
arr[2] =3;
// 배열 안에 있는 값 수정 가능

const numstr = '33.3';
const num = Number(numstr); // Number는 객체의 인스턴스가 아니라 숫자 값을 만들어 줌.
const a = parseInt('16 colts', 10);
console.log(a);

const d = new Date();
console.log(d);
const ts =d.valueOf();
console.log(ts); // 1543249791146
// 초단위로 바꿔주네... 쓸모 있을 듯.

let n = 33.5;
n = n.toString();
console.log(typeof(n));
