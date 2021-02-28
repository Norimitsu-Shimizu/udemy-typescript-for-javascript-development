export {};

enum Months {
  January = 1,
  Feburary,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.Feburary);
console.log(Months.December);

// const MonthsJs = {
//   January: 0,
//   Feburary: 1
// }

// console.log(MonthsJs.January);
// console.log(MonthsJs.Feburary);

enum COLROS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BRUE = '#0000FF',
  BLACK = '#000000'
}

let green = COLROS.GREEN;
console.log({ green });

enum COLROS {
  YELLOW = '#FFFF00',
  GLAY = '#808080'
}

COLROS.YELLOW;
