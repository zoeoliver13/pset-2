const readlineSync = require("readline-sync");
const width = readlineSync.question("\n Width: ");
const length = readlineSync.question(" Length: ");
let diagonal = Math.hypot(width,length);
diagonal = diagonal.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\n A(n) " + width + "-by-" + length +"-inch sheet of paper has a diagonal of " +diagonal+ " inch(es).");