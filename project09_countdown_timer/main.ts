let durationArg = process.argv[2];

if (!durationArg) {
    console.error("Please provide the duration of the timer as a command-line argument.");
    process.exit(1);
}

let duration = parseInt(durationArg);


if (isNaN(duration) || duration <= 0) {
    console.error("Invalid duration. Please enter a positive number.");
    process.exit(1);
}


function startTimer() {
    console.log(`Timer started for ${duration} seconds.\n`);

    const intervalId = setInterval(() => {
        duration--;


        process.stdout.write("\u001b[2J\u001b[0;0H"); 
        console.log(`Time remaining: ${duration} seconds`);

    
        if (duration <= 0) {
            clearInterval(intervalId);
            console.log("\nTime's up! Timer has ended.");
        }
    }, 1000); 
}


startTimer();
