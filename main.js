#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        name: "player1",
        type: "list",
        message: (chalk.yellow("Player1 Choose your weapon")),
        choices: ["Rock", "Paper", "Scissor"]
    },
    {
        name: "player2",
        type: "list",
        message: (chalk.green("Player2 Choose your weapon")),
        choices: ["Rock", "Paper", "Scissor"]
    }
]);
if (answer.player1 === answer.player2) {
    console.log(chalk.bgBlueBright.bold.italic("Tie"));
}
else if (answer.player1 === "Rock" && answer.player2 === "Scissor") {
    console.log(chalk.bgBlueBright.bold.italic("Player 1 wins"));
}
else if (answer.player1 === "Paper" && answer.player2 === "Rock") {
    console.log(chalk.bgBlueBright.bold.italic("Player 1 wins"));
}
else if (answer.player1 === "Scissor" && answer.player2 === "Paper") {
    console.log(chalk.bgBlueBright.bold.italic("Player 1 wins"));
}
else {
    console.log(chalk.bgBlueBright.bold.italic("Player 2 wins"));
}
;
