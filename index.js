let drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
function findMatching(drivers, name) {
  return drivers.filter((driver) => driver.toUpperCase() == name.toUpperCase());
}

function fuzzyMatch(drivers, name) {
  return drivers.filter((driver) => driver[0] === name[0]);
}

// function fuzzyMatch(drivers, name) {
//   let LetterOne = drivers.filter((driver) => driver.firstletter(name));
//   return LetterOne;
// }

let driversnext = ["Sammy", "Sarah", "Sally", "Tommy", "Jimmy"];

console.log(fuzzyMatch(drivers, "Sa")); // ["Sammy", "Sarah", "Sally"]
console.log(fuzzyMatch(drivers, [5], "y")); // [] (no names start with "y")
console.log(fuzzyMatch(drivers, [3, 4], "mm"));

// console.log(fuzzyMatch(drivers, "Sa"));
const driversandhome = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(drivers, hometown) {
  return drivers.filter((driver) => {
    return driver.name === hometown;
  });
}