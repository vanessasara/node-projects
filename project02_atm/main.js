"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const createuser = () => {
    let users = [];
    for (let i = 0; i < 5; i++) {
        let user = {
            name: faker_1.faker.person.fullName(),
            id: i,
            balance: 1000000 * i,
            pin: 1000 + i,
            accountnumber: Math.floor(10000000 * Math.random() * 900000000),
        };
        users.push(user);
    }
    return users;
};
const atmmachine = async (users) => {
    const inquirer = await import("inquirer");
    const res = await inquirer.default.prompt({
        type: "number",
        name: "pin",
        message: "Enter your pin"
    });
    const user = users.find(val => val.pin === res.pin);
    if (user) {
        console.log(`Welcome ${user.name}!`);
        await atmfunc(user);
        return;
    }
    else {
        console.log("Invalid Pin");
    }
};
const atmfunc = async (user) => {
    const inquirer = await import("inquirer");
    const ans = await inquirer.default.prompt({
        type: "list",
        name: "transaction",
        message: "Choose your Transaction type",
        choices: ["balance", "Withdraw", "exit"]
    });
    if (ans.transaction === "Withdraw") {
        const amount = await inquirer.default.prompt({
            type: "number",
            name: "rupee",
            message: "Enter your Amount",
        });
        if (amount.rupee > user.balance) {
            console.log('Insufficient balance');
        }
        else if (amount.rupee > 25000) {
            console.log("You cannot withdraw more than 25000");
        }
        else {
            console.log(`Withdraw amount: ${amount.rupee}`);
            console.log(`Balance: ${user.balance - amount.rupee}`);
        }
    }
    if (ans.transaction === "balance") {
        console.log(`Balance: ${user.balance}`);
        return;
    }
    if (ans.transaction === "exit") {
        console.log("Thanks for using ATM ");
    }
};
const users = createuser();
atmmachine(users);
