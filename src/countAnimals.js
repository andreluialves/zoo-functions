const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (!animal) {
    const result = {};
    const callback = (element) => { result[element.name] = element.residents.length; };// Callback
    species.map(callback);
    return result;
  }
  if (animal.specie && !animal.sex) {
    const callback = (element) => element.name === animal.specie; // Callback
    const animalSpecieArr = species.filter(callback);
    const { residents } = animalSpecieArr[0];
    return residents.length;
  }
  const callback = (element) => element.name === animal.specie; // Callback
  const animalSpecieAndSex = species.filter(callback);
  const { residents } = animalSpecieAndSex[0];
  const count = residents.filter((element) => element.sex === animal.sex);
  return count.length;
}

module.exports = countAnimals;
