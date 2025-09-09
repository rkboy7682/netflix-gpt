export class login_page {
  username_textBox = '[type="text"]';
  password_textBox = '[type="password"]';
  click_ = ".p-2";

  imageTag() {
    cy.get(".w-44").should("exist");
    cy.get(":nth-child(2) > img").should("exist");
  }
  titleName() {
    cy.get(".font-bold").contains("Sign In");
  }
  enterUserName(username) {
    cy.get(this.username_textBox).type(username);
  }
  enterPassword(password) {
    cy.get(this.password_textBox).type(password).clear();
  }
  clickLogin() {
    cy.get(this.click_).click();
  }
  newToNetflix() {
    cy.get(".py-4").contains("New to Netflix? Sign up now.").click();
  }
  SignUp() {
    cy.get(".font-bold").contains("Sign Up");
  }
  fullName() {
    cy.get('[placeholder="Full name"]').type("Test");
  }
  SignUpUsername() {
    cy.get('[placeholder="Email or mobile number"]')
      .clear()
      .type("abcd123@gmail.com");
  }
  SignUpPassword() {
    cy.get('[type="password"]').type("Aa@12345");
  }
  SignUp2() {
    cy.get(".p-2").click();
  }

  signOut() {
    cy.get(".p-6 > :nth-child(3)").contains("Sign Out").click();
  }
}
