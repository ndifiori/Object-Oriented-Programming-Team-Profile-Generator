
// for the test we need to bring in the Engineer javascript file

const Engineer = require('../lib/Engineer');

// our first test will be to check the github property of the engineer
  // the rest of the parameters were checked in the employee test
  // need to pass in the rest of the parameters to make sure it works

test('can set github using constructor parameter', () => { 
  const githubTest = "User";
  const eTest = new Engineer('bob', 3, 'bob@gmail.com', githubTest);
  expect(eTest.github).toBe(githubTest);
});


// the second test will be to check the getrole function

test('getrole function should be engineer', () => {
  const roleTest = "Engineer";
  const eTest = new Engineer('bob', 3, 'bob@gmail.com', 'user');
  expect(eTest.getRole()).toBe(roleTest);
});

// the third test will be check the getGithub function

test('getGithub function should get username', () => {
  const githubTest = 'User';
  const eTest = new Engineer('bob', 3, 'bob@gmail.com', githubTest);
  expect(eTest.getGithub()).toBe(githubTest);
});