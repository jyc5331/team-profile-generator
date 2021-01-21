const { expect } = require("@jest/globals");

const Manager = require("../lib/Manager");

test("Manager object created", () => {
  const manager = new Manager("Joe", 1, "example@gmail.com", 1);
  expect(manager.name).toBe("Joe");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("Name check", () => {
  const manager = new Manager("Joe", 1, "example@gmail.com");
  expect(manager.getName()).toBe("Joe");
});

test("ID check", () => {
  const manager = new Manager("Joe", 1, "example@gmail.com");
  expect(manager.getId()).toBe(1);
});

test("Validate email", () => {
  const manager = new Manager("Joe", 1, "example@gmail.com");
  const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  expect(manager.getEmail()).toMatch(regex);
});

test("Role check", () => {
  const manager = new Manager("Joe", 1, "example@gamil.com");

  expect(manager.getRole()).toBe("Manager");
});

test("OfficeNumber check", () => {
  const manager = new Manager("Joe", 1, "example@gamil.com", 1);

  expect(manager.getOfficeNumber()).toBe(1);
});
