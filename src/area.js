const readlineSync = require("readline-sync");
const width = readlineSync.question("\n Width: ");
const length = readlineSync.question(" Length: ");
let area = length*width;
const conversion = 645.16;
area = area * conversion;
area = area.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\n A(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + area + " square millimeter(s).");