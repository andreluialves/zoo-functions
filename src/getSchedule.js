const data = require('../data/zoo_data');

const { species } = data;
const arrayDays = Object.keys(data.hours);
const arrayHours = Object.values(data.hours);
const arrayAnimals = species.map((element) => element.name);

// Returns the times per day and which animals will be available (Main schedule).
const scheduleNoParams = () => {
  const result = arrayDays.reduce((acc, curr, index) => {
    acc[curr] = {
      officeHour: `Open from ${arrayHours[index].open}am until ${arrayHours[index].close}pm`,
      exhibition: [],
    };
    if (acc.Monday) {
      acc[curr] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }

    species.forEach((element) => {
      if (element.availability.includes(curr)) { acc[curr].exhibition.push(element.name); }
    });
    return acc;
  }, {});

  return result;
};

const mondayClose = () => (
  { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } }
);

const scheduleByDay = (scheduleTarget) => {
  const mainSchedule = [scheduleNoParams()];
  const getDaySchedule = mainSchedule.map((element) => element[scheduleTarget]);
  const objResult = {};
  const [dayTarget] = getDaySchedule;
  objResult[scheduleTarget] = dayTarget;
  // objResult[scheduleTarget] = getDaySchedule[0];
  return objResult;
};

const scheduleByAnimal = (scheduleTarget) => {
  const animalName = species.find((element) => element.name === scheduleTarget);
  return animalName.availability;
};

function getSchedule(scheduleTarget) {
  // Main function code here
  if (scheduleTarget === 'Monday') { return mondayClose(); }
  if (arrayDays.includes(scheduleTarget)) { return scheduleByDay(scheduleTarget); }
  if (arrayAnimals.includes(scheduleTarget)) { return scheduleByAnimal(scheduleTarget); }

  return scheduleNoParams();
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
