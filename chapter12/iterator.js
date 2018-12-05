const book = [1, 2, 3, 4, 5];
const it = book.values();

let current = it.next();
for(let i = 0; i<7; i++){
    console.log(current.value);
    // console.log(it.next());
    current = it.next()
}


class Log{
    constructor(){
        this.messages = [];
    }
    add(message){
        this.messages.push({message, timestamp: Date.now()});
    }
    [Symbol.iterator](){
        let i = 0;
        const messages = this.messages;
        return {
            next(){
                if(i >= messages.length){
                    return {value:undefined, done:true}
                }
                return {value:messages[i++], done:false}
            }
        }
    }
}

const log = new Log();
log.add('first dat at sea');
log.add('spotted whale');
log.add('spotted another vessel');
for(let entry of log){
    console.log(entry);
}

class FibonacciSequence{
    [Symbol.iterator](){
        let a =0, b =1;
        return{
            next(){
                let rval = {value:b, done:false};
                b += a;
                a = rval.value;
                return rval;
            }
        }
    }
}

const fib = new FibonacciSequence();
let i = 0;
for(let n of fib){
    console.log(n);
    if(++i>9) break;
}