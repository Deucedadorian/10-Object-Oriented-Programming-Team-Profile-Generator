const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should return the school of the intern", () => {
      const inputSchool = "schoolName";

      const internSchool = new Intern({ school: "schoolName" }).getSchool();

      expect(internSchool).toEqual(inputSchool);
    });
  });
  describe("getRole", () => {
    it("should return 'Intern'", () => {
      const role = "Intern";

      const internRole = new Intern({}).getRole();

      expect(internRole).toEqual(role);
    });
  });
  describe("getCard", () => {
    it("should return the html card of the Intern", () => {
      const card = `    <div class="card shadow">
      <div class="card-header p-3 mb-0 bg-primary text-white">
        <h5 class="card-title"></h5>
        <h6 class="card-subtitle mb-0">Intern</h6>
      </div>
      <div class="card-body">
        <p class="card-text">ID: </p>
        <p class="card-text">Email: <a href="mailto: " class="card-link" target="_blank"></a></p>
        <p class="card-text">School: </p>
      </div>
    </div>\n`;

      const internCard = new Intern({
        name: "",
        id: "",
        email: "",
        school: "",
      }).getCard();

      expect(internCard).toEqual(card);
    });
  });
});