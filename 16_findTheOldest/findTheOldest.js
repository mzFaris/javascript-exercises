const findTheOldest = function (persons) {
  return persons.reduce((oldestPerson, currentPerson) => {
    let oldestPersonAge = getAge(
      oldestPerson.yearOfBirth,
      oldestPerson.yearOfDeath,
    );
    let currentPersonAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath,
    );
    console.log(oldestPersonAge);
    console.log(currentPersonAge);
    return oldestPersonAge < currentPersonAge ? currentPerson : oldestPerson;
  });
};

function getAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
