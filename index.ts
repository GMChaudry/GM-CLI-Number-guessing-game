#! /usr/bin/env node
import inquirer from "inquirer";

const input = await inquirer.prompt([
    {
    name: "PlayerGuessedNumber",
    type: "number",
    message : "Please Guess a Number Between 1-6",
    }
]);

const randomNumber = Math.floor(Math.random()*6+1);

if (input.PlayerGuessedNumber === randomNumber){
    console.log("Congrats You Got This Right")
}
else {
    console.log("Sorry You Got This Wrong")
};

