const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const validator = require("email-validator");
const generateHTML = require("./utils/generateHTML");
const employees = [];

const promptUserBasic = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message:
          "What is the employee's role? Please select one of the following: Manager, Engineer, or Intern(Required)",
        choices: ["Manager", "Engineer", "Intern", "Quit"],
      },
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
        message: "What is the employee's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID number? (Required)",
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
        message: "What is the employee's email address? (Required)",
        validate: (emailInput) => {
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
        message: "What is the employee's office number? (Required)",
        validate: (officeInput) => {
          if (!isNaN(officeInput)) {
            return true;
          } else {
            console.log("Please enter the employee's office number");
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
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID number? (Required)",
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
        message: "What is the employee's email address? (Required)",
        validate: (emailInput) => {
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
        name: "github",
        message: "What is the employee's github username? (Required)",
        validate: (githubInput) => {
          if (githubInput != "") {
            return true;
          } else {
            console.log("Please enter the employee's github username");
            return false;
          }
        },
      },
    ])
    .then(function (engineerData) {
      console.log(engineerData);
      const newEmployee = new Engineer(
        engineerData.name,
        engineerData.id,
        engineerData.email,
        engineerData.github
      );
      console.log(newEmployee);
      employees.push(newEmployee);
      promptUserBasic();
    });
};

const promptUserIntern = (internAnswers) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID number? (Required)",
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
        message: "What is the employee's email address? (Required)",
        validate: (emailInput) => {
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
        name: "school",
        message: "What is the employee's school? (Required)",
        validate: (schoolInput) => {
          if (schoolInput != "") {
            return true;
          } else {
            console.log("Please enter the employee's school");
            return false;
          }
        },
      },
    ])
    .then(function (internData) {
      console.log(internData);
      const newEmployee = new Intern(
        internData.name,
        internData.id,
        internData.email,
        internData.school
      );
      console.log(newEmployee);
      employees.push(newEmployee);
      promptUserBasic();
    });
};

promptUserBasic();
