const readlineSync = require("readline-sync");
const students = readlineSync.question("\nStudents: ");
const teachers = readlineSync.question("Teachers: ");
const passengers = parseFloat(teachers)+parseFloat(students);
let buscapacity = readlineSync.question("Bus capacity: ");
const remainder = parseFloat(passengers) % parseFloat(buscapacity);
buscapacity = Math.round(parseFloat(passengers)/parseFloat(buscapacity));
buscapacity = buscapacity.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log(" \n" + parseFloat(buscapacity)+" bus(es) is (are) needed, with " + parseFloat(remainder) + " passenger(s) on the last bus.\n");
