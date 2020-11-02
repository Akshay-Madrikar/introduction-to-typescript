const apples: number = 5;
//const speed: string = false; // Error as type is string
const hasObject: null = null;


// Built-in objects
let now: Date = new Date();


// Array
let colors: string[] = ['green','red', 'blue'];
let numbers: number[] = [1,2,3];
let booleanValues: boolean[] = [true, true, false];


// Class
class Car {

}
let car: Car = new Car();


// Object
const coordinates: { x:number; y:number } = {
    x: 10,
    y:20
}

// Function
const callFunc: ( i: number ) => void = (i: number) => {
    console.log(i);
}
callFunc(5);