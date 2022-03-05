const Intern = require("../lib/intern")

describe("Intern class", () => {
    describe("getSchool method", () => {
      it("returns school", () => {
      const intern = new Intern("UCF");
      console.log(intern.getSchool());
      expect(intern.getSchool()).toBe("UCF")
          });
      });
        describe("getRole method", () => {
          it("returns role", () => {
          const intern = new Intern("Intern");
          console.log(intern.getRole());
          expect(intern.getRole()).toBe("Intern")
              });
          });
});