//generator
const fs = require('fs');

function nfcall(f, ...args){
    return new Promise(function(resolve, reject){
        f.call(null, ...args, function(err, ...args){
            if(err) return reject(err);
            resolve(args.length<2? args[0]:args);
        });
    });
}

function ptimeout(delay){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, reject);
    });
}

function grun(g){
    const it = g();
    (function iterate(val) {
            const x = it.next(val);
            if (!x.done) {
                if (x.value instanceof Promise) {
                    x.value.then(iterate).catch(err => it.throw(err));
                } else {
                    setTimeout(iterate, 0, x.value);
                }
            }
        }
    )();
}

function* theFuterIsNow(){
    const DataA = yield nfcall(fs.readFile, 'a.txt');
    const DataB = yield nfcall(fs.readFile, 'b.txt');
    const DataC = yield nfcall(fs.readFile, 'c.txt');
    yield ptimeout(60*1000);
    yield nfcall(fs.writeFile, 'd.txt', DataA+DataB+DataC);
}

grun(theFuterIsNow);
