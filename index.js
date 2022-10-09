// grabbing the tools needed
const inquirer = require('inquirer');
const fs = require('fs');
const genHtml = require('./src/html')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// array where team members will be stored
const members = [];

// questions to load on inquirer prompt
const managerQustions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your Managers Name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your Managers Id number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Managers email address?',
        default: 'example@example.com'
    },
    {
        type: 'input',
        name: 'number',
        message: 'What is your Managers office contact number?'
    }
];
const createMemberQustions = [
    {
        type: 'list',
        name: 'team',
        message: 'Which team member would you like to create next? or exit to create list',
        choices: ['Engineer', 'Intern', 'Exit']
    }
];
const internQustions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your Interns Name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your Interns Id number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Interns email address?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school is your intern enrolled?'
    }
];
const engineerQustions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your Engineers Name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your Engineers Id number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Engineers email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Engineers github username?'
    }
];

function generateHtml(fileName, members) {
    let html = genHtml(members)


    fs.writeFile(fileName, html, function () {
        console.log('Team Page Ready!')
    })
}
// initial call that makes the manager and then asks user to create their team or exit
function createManager() {
    inquirer
        .prompt(managerQustions)
        .then(responses => {

            const teamManager = new Manager(responses.name, responses.id, responses.email, responses.number);
            members.push(teamManager);
            createTeam();

        })
}

// asks user if they would like to create intern or engineer or exit - which will take what they have input thus far and create a team profile
function createTeam() {
    inquirer
        .prompt(createMemberQustions)
        .then(response => {
            switch (response.team) {
                case 'Engineer':
                    return createEngineer();
                case 'Intern':
                    return createIntern();
                case 'Exit':
                    return generateHtml('team.html', members);
            }

        })
}

function createIntern() {
    inquirer
        .prompt(internQustions)
        .then(responses => {

            const newIntern = new Intern(responses.name, responses.id, responses.email, responses.school);
            members.push(newIntern)
            createTeam()

        })

}
function createEngineer() {
    inquirer
        .prompt(engineerQustions)
        .then(responses => {

            const newEngineer = new Engineer(responses.name, responses.id, responses.email, responses.github);
            members.push(newEngineer)
            createTeam()

        })

}


// begins the inquirer process
createManager()
module.exports = managerCardCreator