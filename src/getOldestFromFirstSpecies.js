const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { species } = data;
  const { employees } = data;
  const findEmployee = employees.find((element) => element.id === id);
  const findSpecie = species.find((element) => element.id === findEmployee.responsibleFor[0]);
  const findOldAge = findSpecie.residents.reduce((acc, curr) => {
    if (acc.age > curr.age) { return acc; }
    return curr;
  });
  const result = Object.values(findOldAge);
  return result;
}

module.exports = getOldestFromFirstSpecies;
