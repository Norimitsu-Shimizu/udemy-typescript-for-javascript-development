export {};

const nextYearSarary = (currentSaraly: number, rate: number = 1.1) => {
  return currentSaraly * rate;
};

console.log(nextYearSarary(1000));
