export {}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 24)
console.log(taro)

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>

const profile: Profile = ['Nori', 100]
const nori = new Person(...profile)

type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
