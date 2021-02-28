export {};

let bmi = (height: number, weight: number): number => {
  return weight / (height * height);
};

console.log(bmi(1.80, 70));

let bmi2: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);


console.log(bmi2(1.80, 70));
