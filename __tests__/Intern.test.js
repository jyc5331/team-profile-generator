const { expect } = require("@jest/globals");

const Intern = require("../lib/Intern");

test("Intern object created", () => {
  const intern = new Intern("Joe", 1, "example@gmail.com", "PSU");
  expect(intern.name).toBe("Joe");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test("Name check", () => {
  const intern = new Intern("Joe", 1, "example@gmail.com");
  expect(intern.getName()).toBe("Joe");
});

test("ID check", () => {
  const intern = new Intern("Joe", 1, "example@gmail.com");
  expect(intern.getId()).toBe(1);
});

test("Validate email", () => {
  const intern = new Intern("Joe", 1, "example@gmail.com");
  const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  expect(intern.getEmail()).toMatch(regex);
});

test("Role check", () => {
  const intern = new Intern("Joe", 1, "example@gamil.com");

  expect(intern.getRole()).toBe("Intern");
});

test("School check", () => {
  const intern = new Intern("Joe", 1, "example@gamil.com", "PSU");

  expect(intern.getSchool()).toBe("PSU");
});
