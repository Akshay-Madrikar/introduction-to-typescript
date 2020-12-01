// Generics for classes
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const a1 = new ArrayOfAnything<string>(["a", "b", "c"]); // OR new ArrayOfAnything(["a", "b", "c"])
console.log(a1);

// Generics for functions
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b", "c"]); // OR printAnything(["a", "b", "c"]);
