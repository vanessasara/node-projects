import inquirer from 'inquirer';
const questions = [
    {
        question: "What does TypeScript compile to?",
        choices: ["Typescript"],
        answer: "Typescript"
    },
    {
        question: "Which keyword is used to declare variables in TypeScript?",
        choices: ["var", "let", "const"],
        answer: "let"
    },
    {
        question: "What is the type of 'null' in TypeScript?",
        choices: ["object", "null", "undefined"],
        answer: "object"
    }
];
async function startQuiz() {
    let score = 0;
    console.log("Welcome to the TypeScript Quiz!\n");
    for (const question of questions) {
        const answer = await inquirer.prompt({
            type: "list",
            name: "response",
            message: question.question,
            choices: question.choices
        });
        if (answer.response === question.answer) {
            console.log("Correct!\n");
            score++;
        }
        else {
            console.log("Incorrect. The correct answer is:", question.answer, "\n");
        }
    }
    console.log("Quiz complete! Here are your results:");
    console.log("Total questions:", questions.length);
    console.log("Correct answers:", score);
    console.log("Incorrect answers:", questions.length - score);
}
// Start the quiz
startQuiz();
