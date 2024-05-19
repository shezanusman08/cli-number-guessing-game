#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generate number and show result
const randomnumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to the number guessing game");
const answers = await inquirer.prompt([
    {
        messsage: "userGuessedNumber",
        name: "Please select a number between 1 - 6: ",
        type: "number",
    },
]);
if (answers.userGuessedNumber === randomnumber) {
    console.log("Congratulations! You guess right number.");
}
else {
    console.log("Sorry! The number is not correct");
}
;
