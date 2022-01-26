const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const { employees } = data;
  const verifyEmployees = (element) => element.managers.includes(id);
  const employeesPerson = employees.some(verifyEmployees);
  return employeesPerson;
}

function getRelatedEmployees(managerId) {
  const { employees } = data;
  if (isManager(managerId) === true) {
    const managerSubord = (element) => element.managers.includes(managerId);
    const subordEmployees = employees.filter(managerSubord);
    const fullNames = (element) => `${element.firstName} ${element.lastName}`;
    const allManagerSubord = subordEmployees.map(fullNames);
    return allManagerSubord;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
