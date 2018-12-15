const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter{
    constructor(seconds, supersititious){
        super();
        this.seconds = seconds;
        this.supersititious = !!supersititious;
    }
    go(){
        const countdown = this;
        return new Promise(function(resolve, reject){
            for(let i=countdown.seconds; i>=0; i--){
                setTimeout(function(){
                    if(countdown.supersititious && i ===13)
                        return reject(new Error("Oh my god"));
                    countdown.emit('tick', i);
                    if(i===0) resolve();
                }, (countdown.seconds-i)*1000);
            }
        });
    }
}

const c = new Countdown(1);
c.on('tick', function(i){
   if(i>0) console.log(i+'...')
});

c.go().then(function(){
    console.log("GO!")
}).catch(function(err){
    console.error(err.message);
});

const c_1 = new Countdown(1, true).on(
    'tick', function(i){
        if(i>0) console.log(i+'...')
    }
);
c_1.go().then(
    function(){
        console.log('GO!');
    }
).catch(
  function(err){
      console.error(err.message)
  }
);


class CountdownEmitter extends EventEmitter{
    constructor(seconds, supersititious){
        super();
        this.seconds = seconds;
        this.supersitious = supersititious
    }
    go(){
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function(resolve, reject){
            for(let i = countdown.seconds; i>=0; i--){
                timeoutIds.push(setTimeout(
                    function(){
                        if(countdown.supersitious && i ===13){
                            timeoutIds.forEach(clearTimeout());
                            return reject(new Error("Oh my God"))
                        }
                        countdown.emit('tick', i);
                        if(i===0) resolve();
                    }, (countdown.seconds-i)*1000)
                );
            }
        })
    }
}

const c_2 = new CountdownEmitter(14, true).on(
    'tick', function(i){
        if(i>0) console.log(i+'...')
    }
);
c_2.go().then(
    function(){
        console.log('GO!');
    }
).catch(
  function(err){
      console.error(err.message)
  }
);