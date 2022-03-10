const { expect } = require("@jest/globals");
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
        it("returns an Id", () => {
        const employee = new Employee("Amber", 22, "ajz1221@gmail.com");
        console.log(employee.getId());
        expect(employee.getId()).toBe(22)
        });
    });
    describe("getemail method", () => {
        it("returns an email", () => {
        const employee = new Employee("Amber", 22, "ajz1221@gmail.com");
        console.log(employee.getEmail());
        expect(employee.getEmail()).toBe("ajz1221@gmail.com")
        });
    });
});

