const readlineSync = require("readline-sync");
const name = readlineSync.question("What's your name? \n");
console.log("\nHello, " + name + "!");
