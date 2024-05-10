"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currencies = [
    { name: "USD", rate: 1 / 158.13 }, // 1 PKR = 1/158.13 USD
    { name: "EUR", rate: 0.82 / 158.13 }, // 1 PKR = 0.82/158.13 EUR
    { name: "GBP", rate: 0.73 / 158.13 }, // 1 PKR = 0.73/158.13 GBP
    { name: "JPY", rate: 109.52 / 158.13 }, // 1 PKR = 109.52/158.13 JPY
    { name: "CAD", rate: 1.21 / 158.13 }, // 1 PKR = 1.21/158.13 CAD
    { name: "AUD", rate: 1.29 / 158.13 }, // 1 PKR = 1.29/158.13 AUD
];
async function convertCurrency() {
    const inquirer = await import("inquirer");
    const outputCurrency = await inquirer.default.prompt({
        type: "list",
        name: "toCurrency",
        message: "Select the currency you want to convert to:",
        choices: currencies.map(currency => currency.name)
    });
    const userInput = await inquirer.default.prompt({
        type: "number",
        name: "amount",
        message: `Enter the amount in PKR:`
    });
    const amount = userInput.amount;
    const toCurrency = currencies.find(currency => currency.name === outputCurrency.toCurrency);
    if (toCurrency) {
        const convertedAmount = amount * toCurrency.rate;
        console.log(`${amount} PKR is equal to ${convertedAmount.toFixed(2)} ${outputCurrency.toCurrency}`);
    }
    else {
        console.log("Invalid currency selection.");
    }
}
convertCurrency();
