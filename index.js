const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const validator = require("email-validator");
const { writeFile, copyFile } = require("./utils/generate-site.js");

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
        if ((idInput = Number)) {
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
        validator.validate(emailInput);
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter a valid email address");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "role",
      message:
        "What is your role? Please enter one of the following: Manager, Engineer, or Intern(Required)",
      validate: (roleInput) => {
        if (roleInput === "Manager") {
          promptUserManager();
          return true;
        } else if (roleInput === "Engineer") {
          promptUserEngineer();
        } else if (roleInput === "Intern") {
          promptUserIntern();
        } else {
          console.log(
            "Please enter one of the following: Manager, Engineer, Intern"
          );
          return false;
        }
      },
    },
    //run an inquirer here asking if they want to add another employee, if true loop, if false run generateHTML
    //either way (T/F) call a function that creates an object for the employee using the appopriate class, employee + i
  ]);
};

const promptUserManager = (managerAnswers) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "office",
      message: "What is your office number? (Required)",
      validate: (officeInput) => {
        if ((officeInput = Number)) {
          return true;
        } else {
          console.log("Please enter your office number");
          return false;
        }
      },
    },
  ]);
};
//HELP should the data from these be pushed onto the respective objects?
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

promptUserBasic().then((answers) => {
  console.log(answers);
  // fs.writeFile("newreadme.md", genmd(answers), (err) => {
  //   if (err) throw err;
  // });
});
