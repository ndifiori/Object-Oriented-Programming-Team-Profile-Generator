// for the test we need to bring in the intern javascript file

const Intern = require('../lib/Intern');

// our first test will be to check the school property of the intern
// the rest of the parameters were checked in the employee test
// need to pass in the rest of the parameters to make sure it works

test('can set school using constructor parameter', () => {
  const schoolTest = "davis";
  const eTest = new Intern('bob', 3, 'bob@gmail.com', schoolTest);
  expect(eTest.school).toBe(schoolTest);
});


// the second test will be to check the getrole function

test('getrole function should be intern', () => {
  const roleTest = "Intern";
  const eTest = new Intern('bob', 3, 'bob@gmail.com','davis');
  expect(eTest.getRole()).toBe(roleTest);
});

// the third test will be check the getSchool function

test('getSchool function should get school', () => {
  const schoolTest1 = 'davis';
  const eTest = new Intern('bob', 3, 'bob@gmail.com', schoolTest1);
  expect(eTest.getSchool()).toBe(schoolTest1);
});