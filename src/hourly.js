const readlineSync = require("readline-sync");
const wage = readlineSync.question("\nHourly wage: ");
const mon = readlineSync.question("\nMonday: ");
const tues = readlineSync.question("Tuesday: ");
const wed = readlineSync.question("Wednesday: ");
const thurs = readlineSync.question("Thursday: ");
const fri = readlineSync.question("Friday: ");
const sat = readlineSync.question("Saturday: ");
const sun = readlineSync.question("Sunday: ");
let total = mon*wage+tues*wage+wed*wage+thurs*wage+fri*wage+sat*wage+
sun*wage;
total = total.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nYou'll make $" + total + " this week.\n")
