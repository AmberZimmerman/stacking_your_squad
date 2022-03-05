const Employee = require("../lib/employee");

describe("Employee class", () => {
  describe("getName method", () => {
    it("returns a name", () => {
    const employee = new Employee("Amber", 22, "ajz1221@gmail.com");
    console.log(employee.getName());
    expect(employee.getName()).toBe("Amber")
        });
    });
    describe("getId method", () => {
        it("returns a name", () => {
        const employee = new Employee("Amber", 22, "ajz1221@gmail.com");
        console.log(employee.getName());
        expect(employee.getName()).toBe("Amber")
        });
});

