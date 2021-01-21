const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGitHub() {
    return this.github; //put actual repo here then interpolate into HTML generator
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
