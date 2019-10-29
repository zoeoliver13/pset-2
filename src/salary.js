const readlineSync=require("readline-sync");
let salary = readlineSync.question("\nAnnual salary: ");
salary = salary/24;
const pretax = (salary*.93);
const federalIncomeTax =pretax*.157;
const stateIncomeTax = pretax*.0447;
const socialSecurityTax = pretax*.062;
const medicareTax = pretax*.0145;
let total = pretax-(federalIncomeTax+stateIncomeTax+socialSecurityTax+medicareTax);
total = total.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nYour take-home pay each check will be $"+ total+".\n");
 
