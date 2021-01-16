class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

class Manager extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
  getRole() {
    return "Manager";
  }
}

class Engineer extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.github = github;
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
  getGitHub() {
    return this.github; //put actual repo here then interpolate into HTML generator
  }
  getRole() {
    return "Engineer";
  }
}

class Intern extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.school = school;
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
  getschool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Employee;
