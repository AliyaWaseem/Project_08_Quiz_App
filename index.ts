#! \usr\bin\env node

import inquirer from "inquirer";
import chalk from "chalk";

//Title Description
console.log(chalk.bold.magentaBright("\n \t\t CLI-Quiz Application"));
console.log("*".repeat(50));
console.log(chalk.bold.yellowBright('\n\t Welcome to typescript Quiz Application'));
console.log(">".repeat(56));
console.log(chalk.bold.green.underline('\n You need atleast 5 marks to pass the quiz.\n'));


// Questions for the quiz
const Quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
    question_6: string;
    question_7: string;
    question_8: string;
    question_9: string;
    question_10: string;
} = await inquirer.prompt([
    {
        type: "list",
        name: "question_1",
        message: "Q-1:what is the difference between let and const?",
        choices: ["let cannot be reassigned", "const cannot be reassigned", "let and const are the same", "let and const are used for declaring variables"],
    
    },
    {
        type: "list",
        name: "question_2",
        message: "Q-2:Which of these is not a JavaScript data type?",
        choices: ["Number", "String", "Boolean", "Object"],
    },
    {
        type: "list",
        name: "question_3",
        message: "Q-3:What is the proper way to check if two values are not equal in typescript?",
        choices: ["if (a!== b) {}", "if (a == b) {}", "if (a === b) {}", "if (a!= b) {}"],
    },
    {
        type: "list",
        name: "question_4",
        message: "Q-4:Which of these is a valid JSON syntax?",
        choices: ["{name: 'John', age: 30}", "{name: 'John', 'age': 30}", "{name: John, age: 30}", "{'name': 'John', 'age': 30}"],
    },
    {
      
        type: "list",
        name: "question_5",
        message: "Q-5:Which of these is not a valid JavaScript operator?",
        choices: [ "==", "!=", "<>", "<=", ">=", "**", "==="],
    },
    {
        type: "list",
        name: "question_6",
        message: "Q-6:Which of these is a valid JavaScript keyword?",
        choices: ["var", "let", "const", "all of above"],
    },
    {
        type: "list",
        name: "question_7",
        message: "Q-7:In Typescript, which symbol is commonly used to terminate a statement?",
        choices: [".", ":", ";", ","],
    },
    {
        type: "list",
        name: "question_8",
        message: "Q-8:which of the following is global-scope variable?",
        choices: ["let", "const", "var", "none of above"],
    },
    {
        type: "list",
        name: "question_9",
        message: "Q-9:What is the type of 'null' in TypeScript?",
        choices: [ "null", "object","undefined", "string"],
    },
    {
        type: "list",
        name: "question_10",
        message: "Q-10:Which keyword is used to define an interface in TypeScript?",
        choices: ["interface", "type", "class", "enum"],
    }
          
]);

let score: number = 0; //for storing number

//Using Switch case

switch (Quiz.question_1) {
     case "const cannot be reassigned":
        console.log("1. Correct");
        ++score;
        break;
        default:
            console.log("1. Incorrect");
}

switch (Quiz.question_2) {
    case "Object":
       console.log("2. Correct");
       ++score;
       break;
       default:
        console.log("2. Incorrect");
}

switch (Quiz.question_3) {
    case "if (a!== b) {}":
       console.log("3. Correct");
       ++score;
       break;
       default:
        console.log("3. Incorrect");
}

switch (Quiz.question_4) {
    case "{'name': 'John', 'age': 30}":
       console.log("4. Correct");
       ++score;
       break;
       default:
        console.log("4. Incorrect");
}

switch (Quiz.question_5) {
    case "<>":
       console.log("5. Correct");
       ++score;
       break;
       default:
        console.log("5. Incorrect");
}

switch (Quiz.question_6) {
    case "all of above":
       console.log("6. Correct");
       ++score;
       break;
       default:
        console.log("6. Incorrect");
}

switch (Quiz.question_7) {
    case ";":
       console.log("7. Correct");
       ++score;
       break;
       default:
        console.log("7. Incorrect");
}

switch (Quiz.question_8) {
    case "var":
       console.log("8. Correct");
       ++score;
       break;
       default:
        console.log("8. Incorrect");
}

switch (Quiz.question_9) {
    case "object":
       console.log("9. Correct");
       ++score;
       break;
       default:
        console.log("9. Incorrect");
}

switch (Quiz.question_10) {
    case "interface":
       console.log("10. Correct");
       ++score;
       break;
       default:
        console.log("10. Incorrect");
}

//Displaying score

console.log(chalk.bold.greenBright("\nYour final score is: " + score + "/10"));