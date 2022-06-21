const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  // Because of extends & super(name, id, email)

  // getName(), getId(), getEmail are all inherrited

  // thus they do not need to be rewritten
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
