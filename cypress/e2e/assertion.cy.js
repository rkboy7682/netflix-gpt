/// <reference types="cypress" />
describe("My First Test 1", () => {
  it("Does not do much!", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[type="text"]').type("rkboy7682@gmail.com");
    cy.get('[type="password"]').type("Rr@12345");
    expect(true).to.equal(true);
    assert.equal(4, 4, "not equal");
    assert.isString("Rahul");
    cy.get(".p-2")
      .should("contain", "Sign In")
      .should("have.class", "p-2")
      .and("be.visible")
      .and("be.enabled")
      .should("be.focused"); // it will throw error
    cy.contains("Sign Out").click();
  });
});
