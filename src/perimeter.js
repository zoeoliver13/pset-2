const readlineSync = require("readline-sync");
const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
let perimeter = (2*length)+(2*width);
const conversion = 2.54;
perimeter = perimeter*conversion;
perimeter = perimeter.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 3});
console.log("\nA(n) "+ width +"-by-" + length + "-inch sheet of paper has a perimeter of " +perimeter+ " centimeter(s).\n"  );
