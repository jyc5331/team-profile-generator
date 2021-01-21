const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const validator = require("email-validator");
const generateHTML = require("./utils/generateHTML");
const employees = [];

//have promptuserbasic be one function that leads to other functions
const promptUserBasic = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message:
          "What is your role? Please select one of the following: Manager, Engineer, or Intern(Required)",
        choices: ["Manager", "Engineer", "Intern", "Quit"],
      },
      //either way (T/F) call a function that creates an object for the employee using the appopriate class, employee + i
    ])
    .then(function (data) {
      console.log(data);
      if (data.role === "Manager") {
        return promptUserManager();
      }
      if (data.role === "Engineer") {
        return promptUserEngineer();
      }
      if (data.role === "Intern") {
        return promptUserIntern();
      }
      if (data.role === "Quit") {
        generateHTML(employees);
      }
    });
};
const promptUserManager = (managerAnswers) => {
  return inquirer
    .prompt([
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
          if (!isNaN(idInput)) {
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
        validate: (emailInput) => {
          //HELP this isn't actually working
          if (validator.validate(emailInput)) {
            return true;
          } else {
            console.log("Please enter a valid email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "What is your office number? (Required)",
        validate: (officeInput) => {
          if (!isNaN(officeInput)) {
            return true;
          } else {
            console.log("Please enter your office number");
            return false;
          }
        },
      },
    ])
    .then(function (managerData) {
      console.log(managerData);
      const newEmployee = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.office
      );
      console.log(newEmployee);
      employees.push(newEmployee);
      promptUserBasic();
    });
};
const promptUserEngineer = (engineerAnswers) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "office",
      message: "What is your github username? (Required)",
      validate: (githubInput) => {
        if (githubInput != "") {
          return true;
        } else {
          console.log("Please enter your github username");
          return false;
        }
      },
    },
  ]);
};

const promptUserIntern = (internAnswers) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "What is your the name of your school? (Required)",
      validate: (schoolInput) => {
        if (schoolInput != "") {
          return true;
        } else {
          console.log("Please enter your school name");
          return false;
        }
      },
    },
  ]);
};
// const Bob = new Employee("Bob", 1, "example1@gmail.com");
// const Karen = new Employee("Karen", 2, "example2@gmail.com");
// const Jan = new Employee("Jan", 3, "example3@gmail.com");

// const employees = [Bob, Karen, Jan];
// let html = "";

// for (let i = 0; i < employees.length; i++) {
//   html += `Name: ${employees[i].getName()}
// Role: ${employees[i].getRole()}
// ID: ${employees[i].getId()}
// Email: ${employees[i].getEmail()}
// `;
// }
// console.log(html);
console.log(employees);

promptUserBasic();
//.then generateHTML
//.then write file
//.then copy file
