const data = require('../data/zoo_data');

// const { species } = data;

// // Callback
// const callBackByLocality = (acc, curr) => {
//   const { name, location } = curr;
//   if (!acc[location]) {
//     acc[location] = [];
//   }
//   acc[location].push(name);
//   return acc;
// };

// // Return names by locality.
// const namesByLocality = (options) => species.reduce(callBackByLocality, {});

// // Callback
// const callBackNamesResidents = (acc, curr) => {
//   const { name, location, residents } = curr;
//   if (!acc[location]) {
//     acc[location] = [];
//   }
//   const filterResidents = residents.map((element) => element.name);
//   acc[location].push({ [name]: filterResidents });
//   return acc;
// };

// // Return names and residents.
// const namesResidents = (options) => species.reduce(callBackNamesResidents, {});

// // Callback
// const callBackNamesResidSort = (acc, curr) => {
//   const { name, location, residents } = curr;
//   if (!acc[location]) {
//     acc[location] = [];
//   }
//   const filterResidents = residents.map((element) => element.name);
//   acc[location].push({ [name]: filterResidents.sort() });
//   return acc;
// };

// const namesResidentsSort = (options) => species.reduce(callBackNamesResidSort, {});

// // Callback
// const callBackResidentsSex = (acc, curr) => {
//   const { name, location, residents } = curr;
//   if (!acc[location]) {
//     acc[location] = [];
//   }
//   const filterSex = residents.filter((element) => element.sex === options.sex);
//   const filterResidents = filterSex.map((element) => element.name);
//   acc[location].push({ [name]: filterResidents });
//   return acc;
// };

// const namesResidentsSex = (options) => species.reduce(callBackResidentsSex, {});

// // Callback
// const callBackResidentsSexSort = (acc, curr) => {
//   const { name, location, residents } = curr;
//   if (!acc[location]) {
//     acc[location] = [];
//   }
//   const filterSex = residents.filter((element) => element.sex === options.sex);
//   const filterResidents = filterSex.map((element) => element.name);
//   acc[location].push({ [name]: filterResidents.sort() });
//   return acc;
// };

// const namesResidentsSexSort = (options) => species.reduce(callBackResidentsSexSort, {});

function getAnimalMap(options) {
  // if (!options || !options.includeNames) { return namesByLocality(); }
  // if (options.includeNames && options.sorted === true) { return namesResidentsSort(options); }
  // if (options.includeNames && options.sex && options.sorted !== true) { return namesResidentsSex(options); }
  // if (options.includeNames && options.sex && options.sorted === true) { return namesResidentsSexSort(options); }
  // if (options.includeNames) { return namesResidents(); }

  // return namesByLocality();
}

// const options = { sex: 'female', sorted: true };
// const options = { includeNames: true };
// const options = { includeNames: true, sex: 'female' };
// const options = { includeNames: true, sex: 'female', sorted: true };
// const options = { includeNames: true, sorted: true };

// console.log(getAnimalMap(expected));
// console.log(getAnimalMap(options));

module.exports = getAnimalMap;
