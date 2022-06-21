const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.email = email;
    this.school = school;
  }
  // Because of extends & super(name, id, email)

  // getName(), getId(), getEmail are all inherrited

  // thus they do not need to be rewritten
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
