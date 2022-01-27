const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const countChild = entrants.filter((element) => element.age < 18);
  const children = countChild.length;
  const countAdult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const adults = countAdult.length;
  const countSenior = entrants.filter((element) => element.age >= 50);
  const seniors = countSenior.length;
  const result = {
    child: children,
    adult: adults,
    senior: seniors,
  };

  return result;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const { prices } = data;
  const visitants = countEntrants(entrants);
  const totalChild = prices.child * visitants.child;
  const totalAdult = prices.adult * visitants.adult;
  const totalSenior = prices.senior * visitants.senior;
  const result = totalChild + totalAdult + totalSenior;
  return result;
}

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
// console.log(countEntrants(entrants));
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
