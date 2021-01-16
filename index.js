const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const emailValidator = require("email-validator");

const promptUserBasic = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your ID number? (Required)",
      validate: (idInput) => {
        if (idInput === Number) {
          return true;
        } else {
          console.log("Please enter a valid number");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address? (Required)",
      //     validate: emailValidator (emailInput) => {
      //       if (emailInput) {
      //           return true
      //       } else {
      //           console.log ("Please enter a valid email address")
      //           return false;
      //       }
      //   }
    },
  ]);
};

const Bob = new Employee("Bob", 1, "example1@gmail.com");
const Karen = new Employee("Karen", 2, "example2@gmail.com");
const Jan = new Employee("Jan", 3, "example3@gmail.com");

const employees = [Bob, Karen, Jan];
let html = "";

for (let i = 0; i < employees.length; i++) {
  html += `Name: ${employees[i].getName()}
Role: ${employees[i].getRole()}
ID: ${employees[i].getId()}
Email: ${employees[i].getEmail()}
`;
}
console.log(html);
