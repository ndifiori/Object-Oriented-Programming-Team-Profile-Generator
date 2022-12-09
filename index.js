
// let's bring in the required modules starting with potential employees

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// let's bring in inquirer so that our user can interact with the terminal
// let's bring in path so we can interact with the directory
// let's bring in fs to read and write files

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// let's create a variable that stores an empty array that we can push user's answers to 

const teamMembers = [];
const idMembers = [];

// path.resolve will allow us to resolve a sequence of path segments into an absolute path
  // in this case it will resolve dirname (direcetory name of our current module) to our dist folder

// path.join will join the specified path segments into one path
  // in this case it will allow us to join our resolved pathway with our index.html file

const Directory = path.resolve(__dirname, 'dist');
const distPathway = path.join(Directory, 'index.html');

// we are creating a variable that will require us to bring in the application template module

const render = require('./src/application-template.js');

// let's create the interface the user will see in the terminal using inquirer

console.log(
  '\n Welcome to the team Generator! \n Use `npm run reset` to reset the dist/ folder \n ------------'
);

console.log("Let's build your team!");

// let's create a function that will run for the user in the terminal 
// function needs to have questions for each module

function teamApp() {

  // let's create the questions the user will answer using the inquirer 
  // need an object within the prompt for each parameter we used when creating employee prompts
  // the validate value will create a boolean and a default 
  
  function createManager() {
    
    // our first questions will be for the manager
    
    inquirer 
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is your manager's name?",
          validate: (answer) => { 
            if (answer !== '') {
              return true;
            }
            return 'Please enter a name.';
          },
        },
        {
          type: 'input',
          name: 'managerID',
          message: "What is your manager's ID number?",
          validate: (answer) => {
            
            // .match is an inbuilt function to search a string for a match against our expression
            // store user answer as a variable to pass it through our if check
            
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            } 
            return 'Please enter a number greater than zero.';
          },
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is your manager's email?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email.';
          },
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is your manager's office number?",
          validate: (answer) => {
            
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return 'Please enter a number greater than zero.';
          },
        },
      ])
    
      // let's use our users answer to create a new Manager class that we already built in lib
    
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerID,
          answers.managerEmail,
          answers.managerOfficeNumber
          );
          
          // now we need to do something with this new class SO let's push into our team member array
          teamMembers.push(manager);
          idMembers.push(answers.managerID);
          
          // this will allow the user to select the next team member they would like to add
          nextMember();
      })
    }

    // this function will allow the user to select the next member they would like to add
    function nextMember() {
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'memberChoice',
            message: 'Which team member would you like to add next?',
            choices: [
              'Engineer',
              'Intern',
              "I have no more team members to add.",
            ],
          },
        ])
        .then((userChoice) => {

          // we are using a switch statement here instead of an if else statement because we are checking to see that the user choice which is a single string object

          switch (userChoice.memberChoice) {
            case 'Engineer':
              addEngineer();
              break;
            case 'Intern':
              addIntern();
              break;
            default:
              createTeam();
          }
        });
    }

    function addEngineer() {
      inquirer 
        .prompt([
          {
            type: 'input',
            name: 'engineerName',
            message: "What is your engineer's name?",
            validate: (answer) => {
              if (answer !== '') {
                return true;
              }
              return 'Please provide a name.';
            },
          },
          {
            type: 'input',
            name: 'engineerID',
            message: "What is your engineer's ID?",
            validate: (answer) => {
              const pass = answer.match(/^[1-9]\d*$/);
              if (pass) {

                // this will check to make sure that no 2 employee has the same id

                if (idMembers.includes(answer)) {
                  return 'This ID is already taken. Please enter a different ID number.';
                } else {
                  return true;
                }
              }
                return 'Please enter a number greater than zero.';
            },
          },
          {
            type: 'input',
            name: 'engineerEmail',
            message: "What is your engineer's email?",
            validate: (answer) => {
              const pass = answer.match(/\S+@\S+\.\S+/);
              if (pass) {
                return true;
              }
                return 'Please enter a valid email.';
            },
          },
          {
            type: 'input',
            name: 'engineerGithub',
            message: "What is your engineer's GitHub username?",
            validate: (answer) => {
              if (answer !== '') {
                return true;
              }
                return 'Please enter a valid Github username.';
              },
          },
        ])

        // let's create a new engineer class from our users answers
        .then((answers) => {
          const engineer = new Engineer (
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGithub
          );

        // now we need to push them into our array again
        teamMembers.push(engineer);
        idMembers.push(answers.engineerID);
        nextMember();

        });
    }

    function addIntern() {
      inquirer 
        .prompt([
          {
            type: 'input',
            name: 'internName',
            message: "What is your intern's name?",
            validate: (answer) => {
              if (answer !== '') {
                return true;
              }
              return 'Please enter a name.';
            },
          },
          {
            type: 'input',
            name: 'internID',
            message: "What is your intern's ID?",
            validate: (answer) => {
              const pass = answer.match(/^[1-9]\d*$/);
              if (pass) {
                if (idMembers.includes(answer)) {
                  return 'This ID is already taken. Please enter a different number.';
                } else {
                  return true;
                }
              }
              return 'Please enter a number greater than zero.';
            },
          },
          {
            type: 'input',
            name: 'internEmail',
            message: "What is your intern's email?",
            validate: (answer) => {
              const pass = answer.match(/\S+@\S+\.\S+/);
              if (pass) {
                return true;
              }
              return 'Please enter a valid email address.';
            },
          },
          {
            type: 'input',
            name: 'internSchool',
            message: "What is your intern's school?",
            validate: (answer) => {
              if (answer !== '') {
                return true;
              }
              return 'Please enter a school.';
            },
          },
        ])
        .then((answers) => {
          const intern = new Intern (
            answers.internName,
            answers.internID,
            answers.internEmail,
            answers.internSchool
          );
          teamMembers.push(intern);
          idMembers.push(answers.internID);
          nextMember();
        });
      }

    // now we have our team members that our user has select and filled out information for
      // and we stored them in an array
      // now we need to display that array
    
    function createTeam() {

      // let's use fs exists sync to check it a file already exists in the given path
        // in this case our if check will see if our Directory variable is not already created and if it isn't then it will create it

      if (!fs.existsSync(Directory)) {
        fs.mkdirSync(Directory);
      }

      // write file sync will create a new file 
        // the first parameter is our file 
        // the second parameter is our data 

      fs.writeFileSync(distPathway, render(teamMembers),'utf-8');
    }

    // this will put us back at the top of the function in the case that multiple managers are needed

    createManager();
  }
  
  teamApp();
  
  
  
  
  
  