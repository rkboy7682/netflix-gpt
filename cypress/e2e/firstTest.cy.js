/* eslint-disable no-undef */
describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");

    // Ensure the page has loaded and the sign-in form is present
    cy.get("form").get("h1").contains("Sign In");

    // Type username and password
    cy.get('[type="text"]').type("rkboy7682@gmail.com");
    cy.get('[type="password"]').type("Rr@123456789");

    // Click sign-in button and check the URL
    cy.get("button").contains("Sign In");
    cy.wait(10000);
    cy.url().should("include", "/browse");

    // Wait for the sign-out button to appear and click it
    cy.wait(6000);
    cy.get(".p-6 > :nth-child(3)").contains("Sign Out");
  });
});

describe("My First Test 1", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

// describe("My First Test 2", () => {
//   it("Does not do much!", () => {
//     expect(true).to.equal(false);
//   });
// });

describe("My First Test 2", () => {
  it("Does not do much!", () => {
    expect("Rahul yadav").to.equal("Rahul yadav");
  });
});
