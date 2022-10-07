// grabbing the tools needed
const inquirer = require('inquirer');
const fs = require('fs');

const members = [];

const managerQustions = [
    {

    }
];
const createMemberQustions = [];
const createInternQustions = [];
const createEngineerQustions = [];

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
        .then(reponses => {

        })
}


function init() {
    createManager();
    inquirer
        .prompt(managerQustions)
}





init()