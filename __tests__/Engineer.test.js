const Engineer = require("../lib/Engineer");

//create engineer test
test("Engineer creation", () => {
  // create employee
  const engineer = new Engineer(
    "Scott",
    5,
    "scottmooresrjc@gmail.com",
    "scottmooregithub"
  );
  // employee name is Scott
  expect(engineer.name).toBe("Scott");
  // employee id is 5
  expect(engineer.id).toBe(5);
  // employee's email is scottmooresrjc@gmail.com
  expect(engineer.email).toBe("scottmooresrjc@gmail.com");
  // employees's github is scottmooregithub
  expect(engineer.github).toBe("scottmooregithub");
  // getName() can return a name
  expect(engineer.getName()).toBe("Scott");
  // getId() can return and Id
  expect(engineer.getId()).toBe(5);
  //  getEmail() can return and Email
  expect(engineer.getEmail()).toBe("scottmooresrjc@gmail.com");
  //  getRole() can return a role employee
  expect(engineer.getRole()).toBe("Engineer");
});
