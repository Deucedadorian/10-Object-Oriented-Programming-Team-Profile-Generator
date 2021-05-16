const Manager = require('../lib/manager');

describe("Manager", () => {
  describe("getRole", () => {
    it("should return 'Manager'", () => {
      const role = "Manager";

      const managerRole = new Manager({}).getRole();

      expect(managerRole).toEqual(role);
    });
  });
  describe("getCard", () => {
    it("should return the html card of the Manager", () => {
      const card = `    <div class="card shadow">
      <div class="card-header p-3 mb-0 bg-primary text-white">
        <h5 class="card-title"></h5>
        <h6 class="card-subtitle mb-0">Manager</h6>
      </div>
      <div class="card-body">
        <p class="card-text">ID: </p>
        <p class="card-text">Email: <a href="mailto: " class="card-link" target="_blank"></a></p>
        <p class="card-text">Office number: </p>
      </div>
    </div>\n`;

      const managerCard = new Manager({
        name: "",
        id: "",
        email: "",
        officeNumber: "",
      }).getCard();

      expect(managerCard).toEqual(card);
    });
  });
});