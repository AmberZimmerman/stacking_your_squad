const Manager = require("../lib/manager")

describe("manager class", () => {
    describe("officeNumber method", () => {
        it("returns office number", () => {
        const manager = new Manager(23);
        console.log(manager.officeNumber);
        expect(manager.officeNumber).toBe(23)
            });
        });
    describe("getRole method", () => {
      it("returns role", () => {
      const manager = new Manager("AmberZimmerman");
      console.log(manager.getRole());
      expect(manager.getRole()).toBe("Manager")
          });
      });
});