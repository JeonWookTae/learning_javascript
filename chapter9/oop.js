const SYM = Symbol();
const o = {a: 1, b: 2, c: 3, [SYM]: 4};
Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this._userGears[0];
    }

    get userGear() {
        return this._userGear;
    }

    set userGear(value) {
        if (this._userGears.indexOf(value) < 0) {
            throw new Error(`Invalid gear: ${value}`);
        }
        this._userGear = value;
    }

    shift(gear) {
        this.userGear = gear;
    }
}

const car1 = new Car();
const car2 = new Car();
console.log(car1 instanceof Car);
console.log(car2 instanceof Car);

car1.shift('D');
car2.shift('R');

console.log(car1.userGear, car2.userGear);

// 바로 객체 생성
const newCar = (function () {
    const carProps = new WeakMap();

    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGear = ['P', 'N', 'R', 'D'];
            carProps.set(this, {userGear: this._userGears[0]})
        }

        get userGear() {
            return carProps.get(this).userGear;
        }

        set userGear(value) {
            if (this._userGear.indexOf(value) < 0) {
                throw new Error(`Invalid gear: ${value}`);
            }
            carProps.get(this).userGear = value;
        }

        shift(gear){this.userGear = gear;}

    }
    return Car;
})();

function CarFunc(make, model){
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    this._userGear = this.userGears[0];
}
class Es6Car {}
function Es5Car(){}
console.log(typeof(Es6Car), typeof(Es5Car) );