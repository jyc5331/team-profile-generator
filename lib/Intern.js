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
