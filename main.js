#! /usr/bin/env node
import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Word"
    }
]);
const Words = answers.sentence.trim().split(" ");
console.log(Words);
console.log(`your sentence word count is ${Words.length}`);
