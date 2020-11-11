class Vehicle {

    constructor(public color: string) {}

    honk(): void {
        console.log('Inside Vehicle : Beep');
    }
}

class Maruti extends Vehicle {

    // we will not public for color as we dont want to create new field for current class Maruti
    // it will take color from parent class as argument
    constructor(public wheels: number, color: string) {
        super(color); // to call parent class constructor
    }

    honk(): void {
        console.log('Inside Maruti : Beep');
    }

    private toDrive(): void {
        console.log('Inside Maruti: Driving');
    }

    callMethods(): void {
        this.toDrive();
    }
}

const car = new Maruti(4, 'red');
console.log(car);
car.honk();
// car.toDrive();  -- cannot call private methods outside respective classes
car.callMethods();