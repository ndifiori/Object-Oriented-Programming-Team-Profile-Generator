// for the test we need to bring in the Manager javascript file

const Manager = require('../lib/Manager');

// our first test will be to check the officenumber property of the manager
// the rest of the parameters were checked in the employee test
// need to pass in the rest of the parameters to make sure it works

test('can set school using constructor parameter', () => {
  const officeTest = 3;
  const eTest = new Manager('bob', 3, 'bob@gmail.com', officeTest);
  expect(eTest.officeNumber).toBe(officeTest);
});


// the second test will be to check the getrole function

test('getrole function should be intern', () => {
  const roleTest = "Manager";
  const eTest = new Manager('bob', 3, 'bob@gmail.com', 3);
  expect(eTest.getRole()).toBe(roleTest);
});

// the third test will be check the getofficenumber function

test('getofficenumber function should get school', () => {
  const officeTest1 = 3;
  const eTest = new Manager('bob', 3, 'bob@gmail.com', officeTest1);
  expect(eTest.getOfficeNumber()).toBe(officeTest1);
});

