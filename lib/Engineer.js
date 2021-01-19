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
