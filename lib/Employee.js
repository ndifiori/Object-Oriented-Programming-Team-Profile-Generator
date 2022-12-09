
// class will create a class (a template for an object)
// constructor will create and intialize an object instance of a class 

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

// these functions will allow us to extract information from the object above

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

// the statement below allows us to export this module so we can use it in other javascript files

module.exports = Employee;