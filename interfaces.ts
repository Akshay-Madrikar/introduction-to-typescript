interface Person {
    gender: string,
    age: number,
    married: boolean,
    summary(): string
}

const person1 = {
    gender: 'male',
    age: 50,
    married: false,
    summary(): string {
        return `Gender: ${this.gender}, Age: ${this.age} and Married: ${this.married}`
    }
}

const printPerson = (person: Person): void => {
    console.log(person.summary());
}

printPerson(person1);