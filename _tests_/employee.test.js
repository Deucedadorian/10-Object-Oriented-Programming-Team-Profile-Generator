const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should return the name of the employee", () => {
      const inputName = "Bob";

      const employeeName = new Employee({ name: "Bob" }).getName();

      expect(employeeName).toEqual(inputName);
    });
  });
  describe("getId", () => {
    it("should return the id of the given employee", () => {
      const inputId = 2;

      const id = new Employee({ id: 2 }).getId();

      expect(id).toEqual(inputId);
    });
  });
  describe("getEmail", () => {
    it("should return the email of the given employee", () => {
      const inputEmail = "example@email.com";

      const email = new Employee({ email: "example@email.com" }).getEmail();

      expect(email).toEqual(inputEmail);
    });
  });
  describe("getRole", () => {
    it("should return 'Employee'", () => {
      const employeeType = "Employee";

      const result = new Employee({}).getRole();

      expect(result).toEqual(employeeType);
    });
  });
});
