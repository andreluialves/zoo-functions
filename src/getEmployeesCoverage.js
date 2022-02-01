const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

// Get species name
const getSpecies = (speciesIds) => {
  const speciesNames = [];
  species.forEach((specie) => {
    speciesIds.forEach((element) => {
      if (specie.id === element) {
        speciesNames.push(specie.name);
      }
    });
  });
  return speciesNames;
};

// Get species location
const getLocation = (speciesIds) => {
  const locationInitials = [];
  species.forEach((specie) => {
    speciesIds.forEach((element) => {
      if (specie.id === element) {
        locationInitials.push(specie.location);
      }
    });
  });
  return locationInitials;
};

// Get specie id for id
const getId = (obj) => {
  const idObj = employees.find((element) => element.id === obj.id);
  return idObj.id;
};

// Get specie full name
const getName = (obj) => {
  if (obj.id) {
    const idObj = employees.find((element) => element.id === obj.id);
    const fullName = `${idObj.firstName} ${idObj.lastName}`;
    return fullName;
  }
  const nameObj = employees.find((element) =>
    element.firstName === obj.name || element.lastName === obj.name);
  const fullName = `${nameObj.firstName} ${nameObj.lastName}`;
  return fullName;
};

// Get specie id for name
const getIdForName = (obj) => {
  const nameObj = employees.find((element) =>
    element.firstName === obj.name || element.lastName === obj.name);
  return nameObj.id;
};

// Find an employee when I don't parameter
const noParameter = () => {
  const allEmployees = employees.reduce((acc, curr) => {
    const result = {};
    const speciesIds = curr.responsibleFor;
    result.id = curr.id;
    result.fullName = `${curr.firstName} ${curr.lastName}`;
    result.species = getSpecies(speciesIds);
    result.locations = getLocation(speciesIds);
    acc.push(result);
    return acc;
  }, []);
  return allEmployees;
};

// Find employee when searching by name
const getEmployeeByName = (obj) => {
  const result = {};
  const nameObj = employees.find((element) =>
    element.firstName === obj.name || element.lastName === obj.name);
  if (nameObj === undefined) {
    throw new Error('Informações inválidas');
  }
  const speciesIds = nameObj.responsibleFor;
  result.id = getIdForName(obj);
  result.fullName = getName(obj);
  result.species = getSpecies(speciesIds);
  result.locations = getLocation(speciesIds);
  return result;
};

// Find employee by id
const getEmployeeById = (obj) => {
  const result = {};
  const idObj = employees.find((element) => element.id === obj.id);
  if (idObj === undefined) { throw new Error('Informações inválidas'); }
  const speciesIds = idObj.responsibleFor;
  result.id = getId(obj);
  result.fullName = getName(obj);
  result.species = getSpecies(speciesIds);
  result.locations = getLocation(speciesIds);
  return result;
};

function getEmployeesCoverage(obj) {
  if (!obj) { return noParameter(); }
  if (obj.name) { return getEmployeeByName(obj); }
  if (obj.id) { return getEmployeeById(obj); }
  // return result;
}

module.exports = getEmployeesCoverage;
