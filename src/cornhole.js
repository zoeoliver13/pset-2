const readlineSync = require("readline-sync");
const length = 48;
const width = 24;
const diameter = 6;
const area = 48*24;
//area of a circle = 3.14r^2
//r = diamater*1/2
const area2 = (9)*3.141;
let surfacearea = (area) - (area2);
surfacearea=surfacearea.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nThe surface area of a standard Cornhole board is "+ (surfacearea)+ " square inch(es).\n");
