const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const generateHtml = (employees) => {
    
    let htmlFile = `<h1>${employees[0].getName()}<h1>`

    return htmlFile;
}

module.exports = { generateHtml }