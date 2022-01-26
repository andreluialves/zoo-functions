const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const { employees } = data;
  const saveEmployee = employees.find(
    (element) => element.firstName === employeeName || element.lastName === employeeName,
  );
  return saveEmployee;
}

module.exports = getEmployeeByName;
