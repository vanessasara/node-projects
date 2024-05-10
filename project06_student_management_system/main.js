"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const students = [];
async function manageStudents() {
    const inquirer = await import("inquirer");
    while (true) {
        const answer = await inquirer.default.prompt({
            type: "list",
            name: "action",
            message: "Select an action:",
            choices: ["Add Student", "View Students", "Exit"]
        });
        switch (answer.action) {
            case "Add Student":
                await addStudent();
                break;
            case "View Students":
                viewStudents();
                break;
            case "Exit":
                console.log("Exiting Student Management System.");
                return;
        }
    }
}
async function addStudent() {
    const inquirer = await import("inquirer");
    const studentInfo = await inquirer.default.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter student's name:"
        },
        {
            type: "number",
            name: "age",
            message: "Enter student's age:"
        },
        {
            type: "input",
            name: "grade",
            message: "Enter student's grade:"
        }
    ]);
    students.push({
        name: studentInfo.name,
        age: studentInfo.age,
        grade: studentInfo.grade
    });
    console.log("Student added successfully.");
}
function viewStudents() {
    console.log("List of Students:");
    students.forEach((student, index) => {
        console.log(`Student ${index + 1}:`);
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Grade: ${student.grade}`);
        console.log("--------------------------");
    });
}
manageStudents();
