const readlineSync = require("readline-sync");
const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
let area = length*width;
const conversion = 645.16;
area = area * conversion;
area = area.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + area + " square millimeter(s).");
