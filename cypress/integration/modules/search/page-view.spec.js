/// <reference types="cypress" />

context('Search Module', () => {
  it('it should render the search page', () => {
    cy.visit('http://localhost:3000/');
    // should show main page
    cy.contains('Please enter the name of repo and organization');
  });
  it('it should render the form  when you visit home page (or search page)', () => {
    cy.visit('http://localhost:3000/');
    // should search page (even if it's wrong query in url)
    cy.get('form').should('exist');
  });

  it('it should render the repoName input when you visit home page (or search page)', () => {
    cy.visit('http://localhost:3000/');
    // should search page (even if it's wrong query in url)
    cy.get("input[name='repoName']").should('exist');
  });

  it('it should render the organizationName input when you visit home page (or search page)', () => {
    cy.visit('http://localhost:3000/');
    // should search page (even if it's wrong query in url)
    cy.get("input[name='organizationName']").should('exist');
  });

  it('it should render the error boundary  when user enter an invalid parameter ', () => {
    cy.visit('http://localhost:3000/');

    cy.on('uncaught:exception', (err) => {
      expect(err.message).to.include(
        /* TODO: improvement: it should 
           imported from error bundary in app
        */
        'The data that you have been provided, is not valid',
      );
      done();
      return false;
    });
  });
});
