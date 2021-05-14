const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const generateHtml = (employees) => {
    
    let htmlFile = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
    <div class="container-fluid">\n`;

for (employee of employees) {
  htmlFile += `        <div class="card shadow">
            <div class="card-header p-3 mb-0 bg-primary text-white">
                <h5 class="card-title">${employee.getName()}</h5>
                <h6 class="card-subtitle mb-0">${employee.getRole()}</h6>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${employee.getId()}</p>
                <p class="card-text">Email: <a href="mailto: ${employee.getEmail()}" class="card-link" target="_blank">${employee.getEmail()}</a></p>`;

  if (employee.getRole() === "Manager") {
    htmlFile += `\n                <p class="card-text"> Office number: ${employee.officeNumber}</p>`;
  } else if (employee.getRole() === "Engineer") {
    htmlFile += `\n                <p class="card-text">Github: <a href="https://github.com/${employee.getGithub()} " class="card-link" target="_blank">${employee.getGithub()}</a></p>`;
  } else {
    htmlFile += `\n                <p class="card-text">School: ${employee.getSchool()}</p>`;
  }
  htmlFile += `\n            </div>
        </div>\n`;
}

    htmlFile += `    </div>\n</body>\n</html>`;

    return htmlFile;
}

module.exports = { generateHtml }