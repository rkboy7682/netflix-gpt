// before(function () {
//   cy.fixture("example.json").as("dataa");
//   cy.log(this.dataa.name);
// });
it("Read file useing fixture", () => {
  cy.fixture("example.json").then((data) => {
    cy.log("name is:", data.name);
  });
});

it("Read file", () => {
  cy.readFile("./cypress/fixtures/example.json").then((data) => {
    cy.log("body", data.body);
  });
});

it("Write file", () => {
  cy.writeFile("sample.txt", "Hello world \n");
  cy.writeFile("sample.txt", "test case  ", { flag: "a+" });
});
