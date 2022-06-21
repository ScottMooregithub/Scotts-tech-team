const Employee = require("../lib/Employee");

//create employee test
test("employee creation", () => {
  // create employee
  const employee = new Employee("Scott", 5, "scottmooresrjc@gmail.com");
  // employee name is Scott
  expect(employee.name).toBe("Scott");
  // employee id is 5
  expect(employee.id).toBe(5);
  // employee's email is scottmooresrjc@gmail.com
  expect(employee.email).toBe("scottmooresrjc@gmail.com");
  // getName() can return a name
  expect(employee.getName()).toBe("Scott");
  // getId() can return and Id
  expect(employee.getId()).toBe(5);
  //  getEmail() can return and Email
  expect(employee.getEmail()).toBe("scottmooresrjc@gmail.com");
  //  getRole() can return a role employee
  expect(employee.getRole()).toBe("Employee");
});
