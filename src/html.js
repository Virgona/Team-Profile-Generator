managerCardCreator = require('../index')

function renderTeam(members) {
  if (members === 'Manager') {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${members.Manager.name, members.Manager.role}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${members.Manager.id}</li>
      <li class="list-group-item">${members.Manager.email}</li>
      <li class="list-group-item">${members.Manager.office}</li>
    </ul>
  </div>`
  }
  if (members === 'Engineer') {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${members.Engineer.name, members.Engineer.role}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${members.Engineer.id}</li>
      <li class="list-group-item">${members.Engineer.email}</li>
      <li class="list-group-item">${members.Engineer.github}</li>
    </ul>
  </div>`
  }
  if (members === 'Intern') {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
      ${members.Intern.name, members.Intern.role}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${members.Intern.id}</li>
      <li class="list-group-item">${members.Intern.email}</li>
      <li class="list-group-item">${members.Intern.school}</li>
    </ul>
  </div>`
  }
}

function generateHtml(data) {

  return `<!doctype html>
  <html lang="en">
  <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    
        <title>Team Profile!</title>
      </head>
      <body>
        <div class="jumbotron">
            <h1 class="display-4">Meet the Team!</h1>
        </div>
        <div class="team">${renderTeam(members)}</div>
    
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
        </body>
        </html>`
}


// members.forEach(member => {
//   let managerCardCreator = cardfunction => {
//     return `<div class="card" style="width: 18rem;">
//   <div class="card-header">
//     ${getName(), getRole()}
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">${getId()}</li>
//     <li class="list-group-item">${getEmail()}</li>
//     <li class="list-group-item">${getOffice()}</li>
//   </ul>
// </div>`
//   }
// })

module.exports = generateHtml


// function that uses if statement to render cards for each role.
// make a renderTeam() that will have 3 different conditions checking what role
// then inside of those ifs a function that will render the card then insert the cards to generateHTML
