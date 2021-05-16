const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should return the github account of the Engineer", () => {
      const inputGit = "guthib";

      const engineerGit = new Engineer({ github: "guthib" }).getGithub();

      expect(engineerGit).toEqual(inputGit);
    });
  });
  describe("getRole", () => {
    it("should return 'Enggineer'", () => {
      const role = "Engineer";

      const engineerRole = new Engineer({}).getRole();

      expect(engineerRole).toEqual(role);
    });
  });
  describe("getCard", () => {
    it("should return the html card of the Engineer", () => {
      const card = `    <div class="card shadow">
      <div class="card-header p-3 mb-0 bg-primary text-white">
        <h5 class="card-title">Tim</h5>
        <h6 class="card-subtitle mb-0">Engineer</h6>
      </div>
      <div class="card-body">
        <p class="card-text">ID: 42</p>
        <p class="card-text">Email: <a href="mailto: email@address.com" class="card-link" target="_blank">email@address.com</a></p>
        <p class="card-text">Github: <a href="https://github.com/guthub " class="card-link" target="_blank">guthub</a></p>
      </div>
    </div>\n`;

      const engineerCard = new Engineer({
        name: "Tim",
        id: "42",
        email: "email@address.com",
        github: "guthub",
      }).getCard();

      expect(engineerCard).toEqual(card);
    });
  });
});