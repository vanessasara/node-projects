// Instead of importing directly, use dynamic import
import("inquirer").then(async (inquirer) => {
    const { prompt } = inquirer.default; // Accessing default export
    // Your existing code
    type ans = {
        userguess: number
    };

    const systemgeneratedno = Math.floor(Math.random() * 10);
    const answer: ans = await prompt([{
        type: "number",
        name: "userguess",
        message: "Enter your guess b/w 1 to 10"
    }]);
    const { userguess } = answer;
    console.log(`Your guess: ${userguess}, System's number: ${systemgeneratedno}`);
    if (userguess === systemgeneratedno) {
        console.log("Yay! Your answer is correct. You win!");
    } else {
        console.log("Try again, better luck next time!");
    }
}).catch((error) => {
    console.error("Error loading inquirer:", error);
});
