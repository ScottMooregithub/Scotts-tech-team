const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const teamData = [];

const moveAlong = {
  type: "list",
  messsage: "Would you like to",
  name: "nextchoice",
  choices: ["add manager", "add engineer", "add intern", "finish your team"],
};

const openerQuestion = [
  {
    ...moveAlong,
    message:
      "Welcome to scotts wild wacky team builder what would you like to do?",
  },
];
const mangerQuestions = [
  {
    type: "input",
    messsage: "What is the name of the manager?",
    name: "name",
  },
  {
    type: "input",
    messsage: "What is the employee ID of the manager?",
    name: "id",
    // inquirer function to stop NaN input
    validate: (answer) => {
      if (isNaN(answer)) {
        return "please enter a number";
      }
      return true;
    },
  },
  {
    type: "input",
    messsage: "What is the managers email?",
    name: "email",
  },
  {
    type: "input",
    messsage: "What is the managers office number?",
    name: "officenumber",
  },
  // moveAlong defined at the top of Prompts.js
  moveAlong,
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the name of the engineer?",
    name: "name",
  },
  {
    type: "input",
    message: "what is the employee ID of the engineer?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the engineers email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the enginners github?",
    name: "github",
  },
  moveAlong,
];

const internQuestions = [
  {
    type: "input",
    message: "What is the name of the intern?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the employee ID of the intern?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the interns email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What school did the intern go to?",
    name: "school",
  },
  moveAlong,
];

// write inquirer logic using object created above and classes
async function askOpener() {
  const answers = await inquirer.prompt(openerQuestion);
  await handleNextChoice(answers);
}

async function addManager() {
  const answers = await inquirer.prompt(mangerQuestions);
  const manager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.officenumber
  );
  // pass answers to function to run the if statement below
  await handleNextChoice(answers);
  // push manager data to array
  teamData.push(manager);
}

async function addEngineer() {
  const answers = await inquirer.prompt(engineerQuestions);
  const engineer = new Engineer(
    answers.name,
    answers.id,
    answers.email,
    answers.github
  );
  await handleNextChoice(answers);
  // pushing engineer data to array
  teamData.push(engineer);
}

async function addIntern() {
  const answers = await inquirer.prompt(internQuestions);
  const intern = new Intern(
    answers.name,
    answers.id,
    answers.email,
    answers.school
  );
  await handleNextChoice(answers);
  //pushing intern info to array
  teamData.push(intern);
}

// make an array to capture all of the teams data/ including multiple instances of the same role

async function handleNextChoice(theAnswers) {
  // run the next function based on the users input
  if (theAnswers.nextchoice === "add intern") {
    await addIntern();
  } else if (theAnswers.nextchoice === "add engineer") {
    await addEngineer();
  } else if (theAnswers.nextchoice === "add manager") {
    await addManager();
  } else {
    // Insert html injection logic
  }
}

// Where code is actually initialized. trigger that starts chain reaction
askOpener().then(() => {
  for (let i = 0; i < teamData.length; i++) {
    const role = teamData[i];
    if (role instanceof Engineer) {
      console.log(role);
    }
    if (role instanceof Manager) {
      console.log(role);
    }
    if (role instanceof Intern) {
      console.log(role);
    }
  }
  // Generates the HTML page
  fs.writeFile("cardpage.html", generatePage(teamData), (err) => {
    if (err) console.log(err);
  });
});

// teamData[] captured question data  -

// pass that data to a function  generatePage(teamData)  -

// filled with template literal HTML -

// iterate through data

//  split array and make individual cards for each element

// teamData[0].name
// teamData[0].id

// style data using css

// FUNCTION THAT Holds template literal for generated page
function generatePage(role) {
  console.log();
  /*html*/
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <link rel="stylesheet" href="style.css" />
  <title>Scotts Wild Wacky Team</title>
  </head>
  <body>
  <h1 class="banner">Scotss Wild Wacky Team!</h1>
  <div class="card">
  <div class="container">
  <b>Engineer</b>
  </div>
  <p class="name">${role.name}</p>
  <p class="id">5</p>
  <p class="github">tBezman.github</p>
  </div>
  
  </body>
  `;
}

const mockTeam = [
  new Engineer("terence", 5, "tbez@github"),
  new Manager("lucas", 6, "csgoDaddy@gmail", "69"),
  new Intern("scott", 4, "sm@gmail", "none"),
];

for (let i = 0; i < mockTeam.length; i++) {
  const role = mockTeam[i];
  if (role instanceof Engineer) {
    console.log(role);
  }
  if (role instanceof Manager) {
    console.log(role);
  }
  if (role instanceof Intern) {
    console.log(role);
  }
}

function renderEmployeee(teamData) {}
