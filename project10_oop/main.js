import inquirer from 'inquirer';
class PersonalityTest {
    async startTest() {
        console.log("Welcome to the Personality Test!\n");
        const preferenceAnswer = await inquirer.prompt({
            type: "list",
            name: "preference",
            message: "Do you like to talk to everyone?",
            choices: [
                { name: "Yes, I'm outgoing", value: "outgoing" },
                { name: "Yes, but I'm selective", value: "ambivert" },
                { name: "No, I'm shy", value: "shy" },
                { name: "No, I prefer solitude", value: "introvert" }
            ]
        });
        const personalityType = preferenceAnswer.preference;
        const nameAnswer = await inquirer.prompt({
            type: "input",
            name: "name",
            message: "What is your name?"
        });
        const name = nameAnswer.name;
        let personality = "";
        switch (personalityType) {
            case "outgoing":
                personality = "Outgoing";
                break;
            case "ambivert":
                personality = "Ambivert";
                break;
            case "shy":
                personality = "Shy";
                break;
            case "introvert":
                personality = "Introvert";
                break;
        }
        console.log(`\n${name}, based on your responses, your personality is: ${personality}`);
    }
}
const test = new PersonalityTest();
test.startTest();
