"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function countWords() {
    const inquirer = await import("inquirer");
    const userInput = await inquirer.default.prompt({
        type: "input",
        name: "text",
        message: "Enter a sentence or paragraph:"
    });
    const words = userInput.text.split(/\s+/).filter((word) => word.trim() !== "");
    console.log(`Total words: ${words.length}`);
}
countWords();
