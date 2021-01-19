const { expect } = require("@jest/globals");

const Employee = require("../lib/Employee");

// test module takes in two parameters... a description of the test, and the call back function to run the test
test("Employee object created", () => {
  const employee = new Employee("Joe", 1, "example@gmail.com");

  expect(employee.name).toBe("Joe");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("Name check", () => {
  const employee = new Employee("Joe", 1, "example@gmail.com");

  expect(employee.getName()).toBe("Joe");
});

test("ID check", () => {
  const employee = new Employee("Joe", 1, "example@gmail.com");

  expect(employee.getId()).toBe(1);
});

test("Validate email", () => {
  const employee = new Employee("Joe", 1, "example@gmail.com");

  const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  expect(employee.getEmail()).toMatch(regex);
});

test("Role check", () => {
  const employee = new Employee("Joe", 1, "example@gamil.com");

  expect(employee.getRole()).toBe("Employee");
});
