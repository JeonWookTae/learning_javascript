//generator

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