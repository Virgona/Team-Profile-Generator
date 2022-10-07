// grabbing the tools needed
const inquirer = require('inquirer');
const fs = require('fs');

const members = [];

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
        numer: 'team',
        message: 'Which team member would you like to create next? or exit to create list',
        choices: ['Engineer', 'Intern', 'Exit']
    }
];
const InternQustions = [
    'Name?',
    'Id Number?',
    'Email?',
    'What School are they attending?'
];
const createEngineerQustions = [
    'Name?',
    'Id Number?',
    'Email?',
    'Github username?'
];

// call createManager()
// ask manager questions
// construct a Manager from responses
// add the manager to memebers
// call createTeamMember()

// createTeamMember
// ask to create engineer or intern or halt
// if response is engineer -> createEngineer() 
// if response is inter -> createIntern()
// else generateHtml(members) 

function createManager() {
    inquirer
        .prompt(managerQustions)
        .then(responses => {

            JSON.stringify(responses);
            members.push(responses);
            // generateTeam();

        })
}

// function createTeam() {
//     inquirer
//         .prompt(createMemberQustions)
//         .then(response => {
//             if (response === 'Intern') {
//                 createInterface();
//             }
//             if (response === 'Engineer') {
//                 createEngineer();
//             } else generateHtml();
//         })
// }


// function init() {
//     createManager();
//     inquirer
//         .prompt(managerQustions)
// }




createManager()
// init()