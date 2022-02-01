const data = require('../data/zoo_data');

const { species } = data;

// Return names by locality.
const namesByLocality = (options) => species.reduce(
  (acc, curr) => {
    const { name, location } = curr;
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(name);
    return acc;
  }, {},
);

// Return names and residents by sex.
const namesResidents = (options) => species.reduce(
  (acc, curr) => {
    const { name, location, residents } = curr;
    if (!acc[location]) { acc[location] = []; }
    const filterResidents = residents.map((element) => element.name);
    if (options.sex) {
      const filterSex = residents.filter((element) => element.sex === options.sex);
      const filterSexResidents = filterSex.map((element) => element.name);
      const sortValidation = options.sorted ? filterSexResidents.sort() : filterSexResidents;
      acc[location].push({ [name]: sortValidation });
      return acc;
    }
    if (options.sorted) {
      acc[location].push({ [name]: filterResidents.sort() });
      return acc;
    }
    acc[location].push({ [name]: filterResidents });
    return acc;
  }, {},
);

function getAnimalMap(options) {
  if (!options || !options.includeNames) { return namesByLocality(); }
  if (options.includeNames) { return namesResidents(options); }
  return namesByLocality();
}

module.exports = getAnimalMap;
