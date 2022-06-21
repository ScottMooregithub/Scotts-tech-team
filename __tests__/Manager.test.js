const Manager = require("../lib/Manager");

//create employee test
test("employee creation", () => {
  // create manager
  const manager = new Manager("Scott", 5, "scottmooresrjc@gmail.com", 1);
  // manager name is Scott
  expect(manager.name).toBe("Scott");
  // manager id is 5
  expect(manager.id).toBe(5);
  // managers email is scottmooresrjc@gmail.com
  expect(manager.email).toBe("scottmooresrjc@gmail.com");
  // managers officeNumber should be 1
  expect(manager.officeNumber).toBe(1);
  // getName() can return a name
  expect(manager.getName()).toBe("Scott");
  // getId() can return and Id
  expect(manager.getId()).toBe(5);
  //  getEmail() can return and Email
  expect(manager.getEmail()).toBe("scottmooresrjc@gmail.com");
  //  getRole() can return a role manager
  expect(manager.getRole()).toBe("Manager");
});
