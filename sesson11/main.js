const CheckDog = (dogsJulia, dogsDake) => {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsDake);
  console.log(dogs);
  dogs.forEach((dog, i) => {
    if (dog > 3) {
      console.log(dog);
    }
  });
};
CheckDog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
////
const calcAverageHumanAge = (ages) => {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);
  const adults = humanAges.filter((age) => age >= 18);
  console.log(adults);
  const trungbinh = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return trungbinh;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([6, 16, 10, 5, 6, 1, 4]);
