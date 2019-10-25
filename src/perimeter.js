const readlineSync = require("readline-sync");
const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
let area = length*width;
const conversion = area*2.54;
area = area*conversion;
area = area.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nA(n) "+ width +"-by-" + length + " inch sheet of paper has a perimeter of " +area+ " centimeter(s)."  );
