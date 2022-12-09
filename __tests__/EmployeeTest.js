
// let's bring in the Employee class 

const Employee = require('../lib/Employee');

// now we can create our tests

// let's ensure that we can create an instance of our employee class
  // we are storing a new instance in a variable
  // then we are expecting our variable to be of data type object

test('instance of employee class', () => {
  const eTest = new Employee();
  expect(typeof(eTest)).toBe('object');
});

// let's create a second test that allows us to set a name that is in our 1st constructor parameter

test('set name using contructor parameter', () => {
  const nameTest = 'bob';
  const eTest = new Employee(nameTest);
  expect(eTest.name).toBe(nameTest);
});

// let's create a third test that allows us to set an id that is our 2nd constructor parameter
  // need to pass bob as the name parameter when we delcare a new instance of the class

test('set id using constructor parameter', () => {
  const idTest = 3;
  const eTest = new Employee('bob', idTest);
  expect(eTest.id).toBe(idTest);
});

// let's create our fourth test that allows us to set an email as our 3rd constructor parameter

test('set email using constructor paremter', () => {
  const emailTest = "bob@gmail.com";
  const eTest = new Employee('bob', 3, emailTest)
  expect(eTest.email).toBe(emailTest);
});

// let's create our fifth test that allows us the function getName to return the name in the constructor

test('returns name when using getName function', () => {
  const nameTest = 'bob';
  const eTest = new Employee(nameTest);
  expect(eTest.getName()).toBe(nameTest);
}),

// let's create our sixth test that allows us the function getID to return the id in the constructor
  // need to pass othe parameters through so it works

test('returns id when using getId function', () => {
  const idTest = 3;
  const eTest = new Employee('bob', idTest);
  expect(eTest.getId()).toBe(idTest);
});

// let's create our seventh test that allows us the function getEmail to return the email in the constructor
  // need to pass othe parameters through so it works

test('returns email when using getEmail function', () => {
  const emailTest = 'bob@gmail.com'
  const eTest = new Employee('bob', 3, emailTest)
  expect(eTest.getEmail()).toBe(emailTest);
});

// let's create our eight test that allows us the function getRole to return the role in the constructor
  // need to pass othe parameters through so it works

test('returns role when using getRole function', () => {
  const roleTest = "Employee";
  const eTest = new Employee('bob', 3, 'bob@gmail.com');
  expect(eTest.getRole()).toBe(roleTest);
})