const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // Because of extends & super(name, id, email)

  // getName(), getId(), getEmail are all inherrited

  // thus they do not need to be rewritten
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
