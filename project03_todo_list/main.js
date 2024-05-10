"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let todos = ["venisa", "sarah"];
async function createTodo() {
    const inquirer = await import("inquirer");
    do {
        console.log("Hi, Welcome");
        const ans = await inquirer.default.prompt({
            type: "list",
            name: "operation",
            message: "What would you like?",
            choices: ["Add", "View", "Delete", "Update", "Exit"]
        });
        if (ans.operation === "Add") {
            const addTodo = await inquirer.default.prompt({
                type: "input",
                message: "Add item",
                name: "addItem"
            });
            todos.push(addTodo.addItem);
        }
        if (ans.operation === "View") {
            console.log(todos);
        }
        if (ans.operation === "Delete") {
            const deleteTodo = await inquirer.default.prompt({
                type: "list",
                name: "deleteItem",
                message: "Select item to delete",
                choices: todos
            });
            todos = todos.filter(item => item !== deleteTodo.deleteItem);
            console.log(todos);
        }
        if (ans.operation === "Update") {
            const updateTodo = await inquirer.default.prompt({
                type: "list",
                name: "updateItem",
                message: "Select item to update",
                choices: todos
            });
            const addTodo = await inquirer.default.prompt({
                type: "input",
                message: "Add item to update",
                name: "addItem"
            });
            todos = todos.map(item => (item === updateTodo.updateItem ? addTodo.addItem : item));
            console.log(todos);
        }
        if (ans.operation === "Exit") {
            console.log("Exiting Todo App");
            break;
        }
    } while (true);
}
createTodo();
