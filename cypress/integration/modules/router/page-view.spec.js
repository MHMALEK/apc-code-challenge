/// <reference types="cypress" />

context("Search Module", () => {
  beforeEach(() => {
    // TODO: improvement: read url from base config.should not hard coded.
    cy.visit("http://localhost:3000/");
  });

  it("it should render the not found page when you  enter a invalid route", () => {
    cy.visit("http://localhost:3000/adsa");
    cy.get("div").contains("Not Found");
  });

  it("it should render the text when user enter index page", () => {
    cy.contains("Please enter the name of repo and organization");
  });

});
