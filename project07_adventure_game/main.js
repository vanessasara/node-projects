import chalk from 'chalk';
import inquirer from 'inquirer';
// Define scenes for the game
const scenes = [
    {
        description: "You find yourself in a bustling town square. Where do you go?",
        options: [
            { text: "Visit the marketplace", nextSceneIndex: 1 },
            { text: "Head towards the castle", nextSceneIndex: 2 }
        ]
    },
    {
        description: "You enter the marketplace. There are various stalls selling goods. What do you do?",
        options: [
            { text: "Buy supplies", nextSceneIndex: 3 },
            { text: "Talk to the locals", nextSceneIndex: 4 }
        ]
    },
    {
        description: "You approach the majestic castle gates. Guards stand watch. What is your plan?",
        options: [
            { text: "Request an audience with the king", nextSceneIndex: 5 },
            { text: "Explore the surrounding area", nextSceneIndex: 6 }
        ]
    },
    {
        description: "You purchase some supplies for your journey.",
        options: [],
        item: "Supplies"
    },
    {
        description: "You chat with the locals and learn about rumors of a hidden treasure nearby.",
        options: []
    },
    {
        description: "You are granted an audience with the king. He gives you a quest to retrieve a valuable artifact.",
        options: [],
        event: "Quest"
    },
    {
        description: "As you explore, you encounter a band of thieves!",
        options: [
            { text: "Fight the thieves", nextSceneIndex: 8 },
            { text: "Attempt to sneak away", nextSceneIndex: 9 }
        ],
        encounter: "Thieves"
    },
    {
        description: "You engage in combat with the thieves.",
        options: [],
        event: "Combat"
    },
    {
        description: "You successfully defeat the thieves and find a valuable item among their belongings.",
        options: [],
        item: "Valuable item"
    },
    {
        description: "You manage to escape from the thieves, but they steal some of your belongings.",
        options: []
    }
];
// Define player's inventory
const inventory = [];
// Function to handle random encounters and events
function handleEvent(event) {
    switch (event) {
        case "Thieves":
            console.log(chalk.red("You encounter a group of thieves!"));
            break;
        case "Quest":
            console.log(chalk.green("The king has entrusted you with an important quest!"));
            break;
        case "Combat":
            console.log(chalk.red("A fierce battle ensues!"));
            break;
        default:
            console.log(chalk.yellow("You encounter something unexpected!"));
    }
}
// Function to play the game
async function playGame() {
    let currentSceneIndex = 0;
    while (currentSceneIndex !== -1) {
        const currentScene = scenes[currentSceneIndex];
        console.log(chalk.yellow.bold(currentScene.description));
        if (currentScene.encounter) {
            handleEvent(currentScene.encounter);
        }
        if (currentScene.event) {
            handleEvent(currentScene.event);
        }
        if (currentScene.item) {
            inventory.push(currentScene.item);
            console.log(chalk.green(`You obtained: ${currentScene.item}`));
        }
        if (currentScene.options.length === 0) {
            break; // Reached the end of the game
        }
        const options = currentScene.options.map((option, index) => ({
            name: option.text,
            value: index
        }));
        const answer = await inquirer.prompt({
            type: "list",
            name: "choice",
            message: chalk.cyan("Choose an option:"),
            choices: options
        });
        currentSceneIndex = currentScene.options[answer.choice].nextSceneIndex;
    }
    console.log(chalk.green.bold("Congratulations! You've reached the end of the game."));
    console.log(chalk.green.bold("Inventory:"));
    inventory.forEach(item => console.log(chalk.green("- " + item)));
}
playGame();
