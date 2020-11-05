const dates = [new Date(), new Date()]; //type inference works here
const date= []; // type inference is any, which we've to avoid most of the time
//const date: Date[] = [];

// Multiple types in array
const age: (number | string)[] = [];
age.push(23);
age.push('Twenty Three');