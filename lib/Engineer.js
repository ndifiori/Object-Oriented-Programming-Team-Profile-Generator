
// the require statement read a javascript file, executes the file, and then will return the exported file for us to use in this javascript file

const Employee = require('./Employee');

// the extends keyword allows us to create a child class of employee
// the child class will inherit the methods from the parent class

class Engineer extends Employee {
  constructor(name, id, email, github) {

    // the super method refers to the parent class and it's method that the child class will now inherit

    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;