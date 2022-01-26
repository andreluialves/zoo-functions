const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const verifyName = (element) => element.name === animal;
  const verifyAge = (element) => element.age >= age;
  const testFindAnimal = species.find(verifyName);
  const { residents } = testFindAnimal;
  return residents.every(verifyAge);
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
