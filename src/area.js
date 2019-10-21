const readlineSync = require("readline-sync");
const width = readlineSync.question("Width");
const length = readlineSync.question("Length");
const area = length*width;
console.log("a(n)" + width + "-by-" + length + "-inch sheetof paper has an area of" + area*25.4 + "millimeter(s)");
