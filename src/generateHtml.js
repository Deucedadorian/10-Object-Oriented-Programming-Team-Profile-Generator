//generateHtml takes in the employees array generated 
//from the prompts answered by the user and returns
//html in a template literal
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
    htmlFile += employee.getCard();
  }
  htmlFile += `  </div>\n</body>\n</html>`;
  return htmlFile;
};

module.exports = { generateHtml }