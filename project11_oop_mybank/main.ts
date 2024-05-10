import * as inquirer from 'inquirer';
import {Faker} from "@faker-js/faker"

class User {
    name: string;
    id: number;
    balance: number;
    pin: number;
    accountNumber: number;

    constructor(name: string, id: number, balance: number, pin: number, accountNumber: number) {
        this.name = name;
        this.id = id;
        this.balance = balance;
        this.pin = pin;
        this.accountNumber = accountNumber;
    }

    withdraw(amount: number) {
        if (amount > this.balance) {
            console.log('Insufficient balance');
        } else if (amount > 25000) {
            console.log('You cannot withdraw more than 25000');
        } else {
            this.balance -= amount;
            console.log(`Withdraw amount: ${amount}`);
            console.log(`Balance: ${this.balance}`);
        }
    }
}

class Bank {
    users: User[];

    constructor() {
        this.users = [];
    }

    createUser(name: string, balance: number, pin: number) {
        const id = this.users.length;
        const accountNumber = Math.floor(10000000 * Math.random() * 900000000);
        const user = new User(name, id, balance, pin, accountNumber);
        this.users.push(user);
        return user;
    }

    getUserByPin(pin: number): User | undefined {
        return this.users.find(user => user.pin === pin);
    }
}

async function main() {
    const bank = new Bank();

    for (let i = 0; i < 5; i++) {
        const name = Faker.name.firstName();
        const balance = 1000000 * i;
        const pin = 1000 + i;
        bank.createUser(name, balance, pin);
    }

    const inquirer = await import('inquirer');

    const pinAnswer = await inquirer.default.prompt({
        type: 'number',
        name: 'pin',
        message: 'Enter your pin',
    });

    const user = bank.getUserByPin(pinAnswer.pin);

    if (user) {
        console.log(`Welcome ${user.name}!`);

        const transactionAnswer = await inquirer.default.prompt({
            type: 'list',
            name: 'transaction',
            message: 'Choose your Transaction type',
            choices: ['balance', 'Withdraw', 'exit'],
        });

        if (transactionAnswer.transaction === 'balance') {
            console.log(`Balance: ${user.balance}`);
        } else if (transactionAnswer.transaction === 'Withdraw') {
            const amountAnswer = await inquirer.default.prompt({
                type: 'number',
                name: 'amount',
                message: 'Enter the amount to withdraw',
            });
            user.withdraw(amountAnswer.amount);
        } else {
            console.log('Thanks for using the ATM!');
        }
    } else {
        console.log('Invalid pin');
    }
}

main();
