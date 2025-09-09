/// <reference types="cypress" />

import { login_page } from "./loginPage/login_page";

const loginPage = new login_page();
beforeEach(() => {
  cy.visit("http://localhost:3000/");
  cy.viewport(1920, 1080);
});
it("Login Page Test", () => {
  loginPage.imageTag();
  loginPage.titleName();
  loginPage.enterUserName("rkboy7682@gmail.com");
  loginPage.enterPassword("Rr@12345");
  loginPage.clickLogin();
  loginPage.newToNetflix();
  loginPage.SignUp();
  loginPage.fullName();
  loginPage.SignUpUsername();
  loginPage.SignUpPassword();
  loginPage.SignUp2();
  // loginPage.signOut();
});
