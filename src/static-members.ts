export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static LastName: string = 'Ishida';

  static work() {
    //     "Hey, guys! This is Atsushi! Are you intersted in TypeScript? Let's dive into TypeScript!"
    return `Hey, guys! This is ${this.firstName}! Are you intersted in TypeScript? Let's dive into TypeScript!`
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
