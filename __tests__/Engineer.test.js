const { expect } = require("@jest/globals");

const Engineer = require("../lib/Engineer");

test("Engineer object created", () => {
  const engineer = new Engineer("Joe", 1, "example@gmail.com", "jyc5331");
  expect(engineer.name).toBe("Joe");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("Name check", () => {
  const engineer = new Engineer("Joe", 1, "example@gmail.com");
  expect(engineer.getName()).toBe("Joe");
});

test("ID check", () => {
  const engineer = new Engineer("Joe", 1, "example@gmail.com");
  expect(engineer.getId()).toBe(1);
});

test("Validate email", () => {
  const engineer = new Engineer("Joe", 1, "example@gmail.com");
  const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  expect(engineer.getEmail()).toMatch(regex);
});

test("Role check", () => {
  const engineer = new Engineer("Joe", 1, "example@gamil.com");

  expect(engineer.getRole()).toBe("Engineer");
});

test("Github check", () => {
  const engineer = new Engineer("Joe", 1, "example@gamil.com", "jyc5331");

  expect(engineer.getGitHub()).toBe("jyc5331");
});
