function* rainbow(){
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
}
const it = rainbow();
for(let i =0; i < 1; i++){
    console.log(it.next())
}
for(let color of rainbow()){
    console.log(color);
}

function* interragate(){
    const name = yield "what is your name?";
    const color = yield "what is your favorite color";
    return `${name}'s favorite color is ${color}`;
}
const in_it = interragate();
console.log(in_it.next());
console.log(in_it.next('Ethan'));
console.log(in_it.next('orange'));


function* abc(){
    yield 'a';
    yield 'b';
    return 'c';
}

for(let i of abc()){
    console.log(i);
}