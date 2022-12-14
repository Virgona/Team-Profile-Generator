managerCardCreator = require('../index')
// renders the team cards to the html depending on how many are input by the user
function renderTeam(member) {
  if (member.getRole() === 'Manager') {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
    ${member.name}  
    &#128084; ${member.getRole()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id: ${member.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
      <li class="list-group-item">Phone: ${member.office}</li>
    </ul>
  </div>`
  }
  if (member.getRole() === 'Engineer') {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
    ${member.name}  
    &#128083; ${member.getRole()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id: ${member.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
      <li class="list-group-item">Github:<a href=https://github.com/${member.github} target="_blank">${member.github}</a></li>
    </ul>
  </div>`
  }
  if (member.getRole() === 'Intern') {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
    ${member.name}  
    &#129299 ${member.getRole()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id: ${member.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
      <li class="list-group-item">School: ${member.school}</li>
    </ul>
  </div>`
  }
}
// generates the html page after the user has input all information
function generateHtml(members) {

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
        <div class="team">${members.map(member => {
    return renderTeam(member)
  })
    }</div>
    
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
        </body>
        </html>`
}

module.exports = generateHtml

