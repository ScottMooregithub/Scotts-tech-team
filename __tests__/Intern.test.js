const Intern = require("../lib/Intern");

//create intern test
test("create an intern", () => {
  // create intern
  const intern = new Intern(
    "scott",
    5,
    "scottmooresrjc@gmail.com",
    "Community College"
  );
  // intern name is Scott
  expect(intern.name).toBe("scott");
  // intern id is 5
  expect(intern.id).toBe(5);
  // interns email is scottmooresrjc@gmail.com
  expect(intern.email).toBe("scottmooresrjc@gmail.com");
  // intern school retruns community college
  expect(intern.school).toBe("Community College");
  // getName() can return a name
  expect(intern.getName()).toBe("scott");
  // getId() can return and Id
  expect(intern.getId()).toBe(5);
  //  getEmail() can return and Email
  expect(intern.getEmail()).toBe("scottmooresrjc@gmail.com");
  // getSchool() returns Community College
  expect(intern.getSchool()).toBe("Community College");
  //  getRole() can return a role employee
  expect(intern.getRole()).toBe("Intern");
});
