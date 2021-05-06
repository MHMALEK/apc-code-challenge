/// <reference types="cypress" />

context('Search Module', () => {
  beforeEach(() => {
    // TODO: improvement: read url from base config.should not hard coded.
    cy.visit('http://localhost:3000');
  });
  it('it should not allow  user to change the state of issue', () => {
    const input = cy.get("select[name='issueState']");

    input.should('have.attr', 'disabled');
  });

  it('it should not allow  user to see the result without entering data', () => {
    const input = cy.get("button[type='submit']");
    input.click();
    cy.contains('Required');
  });

  it('it should show hint for start', () => {
    cy.get('div');
    // it's better to use Xpath or another selector here. it's here because UI don't have anything
    cy.should('contain', 'please enter something to start');
  });

  it('it should not render pagination when there is no data', () => {
    cy.get('div');

    cy.should('not.contain', 'next');
  });
});
