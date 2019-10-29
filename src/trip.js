const readlineSync = require("readline-sync");
const students = readlineSync.question("\nStudents: ");
const teachers = readlineSync.question("Teachers: ");
const passengers = parseFloat(teachers)+parseFloat(students);
let busCapacity = readlineSync.question("Bus capacity: ");
const remainder = parseFloat(passengers) % parseFloat(busCapacity);
busCapacity = Math.round(parseFloat(passengers)/parseFloat(busCapacity));
busCapacity = busCapacity.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log(" \n" + parseFloat(busCapacity)+" bus(es) is (are) needed, with " + parseFloat(remainder) + " passenger(s) on the last bus.\n");
