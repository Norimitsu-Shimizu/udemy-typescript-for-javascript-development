export {};

let fooCompatible: any;
let barCompatible: string = 'Typescript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooImcompatible: string;
let barImcompatible: number = 1;

// fooImcompatible = barImcompatible

let fooString: string;
let barString: string = 'string';

fooString = barString

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;

fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'HamSan');
