const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
    describe("getGithub method", () => {
      it("returns github", () => {
      const engineer = new Engineer("AmberZimmerman");
      console.log(engineer.getGithub());
      expect(engineer.getGithub()).toBe("AmberZimmerman")
          });
      });
      describe("getRole method", () => {
        it("returns role", () => {
        const engineer = new Engineer("github");
        console.log(engineer.getRole());
        expect(engineer.getRole()).toBe("Engineer")
            });
        });
});