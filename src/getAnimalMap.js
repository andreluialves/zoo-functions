const data = require('../data/zoo_data');

const { species } = data;

const callBackByLocality = (acc, curr) => { // Callback
  const { name, location } = curr;
  if (!acc[location]) {
    acc[location] = [];
  }
  acc[location].push(name);
  return acc;
};

const namesByLocality = () => species.reduce(callBackByLocality, {}); // Return names by locality.

const callBackNamesResidents = (acc, curr) => { // Callback
  const { name, location, residents } = curr;
  // const { sex } = residents;
  if (!acc[location]) {
    acc[location] = [];
  }
  acc[location].push({ [name]: residents.map((resident) => resident.name) });
  return acc;
};

const byNames = (sorted, sex) => species.reduce(callBackNamesResidents, {}); // Return names and residents.

function getAnimalMap(options) {
  if (!options || !options.includeNames) { return namesByLocality(); }
  // if (options.includeNames && options.sorted && options.sex) { return byNames(); }
  if (options.includeNames) { return byNames(); }
  // if (options.sorted === true && !options.sorted && options.includeNames) { return byNames(); }

  return namesByLocality();
}

// const expected = {
//   NE: ['lions', 'giraffes'],
//   NW: ['tigers', 'bears', 'elephants'],
//   SE: ['penguins', 'otters'],
//   SW: ['frogs', 'snakes'],
// };

// const options = { sex: 'female', sorted: true };
// const options = { includeNames: true };
const options = { includeNames: true, sorted: true };

// console.log(getAnimalMap(expected));
console.log(getAnimalMap(options));

module.exports = getAnimalMap;
