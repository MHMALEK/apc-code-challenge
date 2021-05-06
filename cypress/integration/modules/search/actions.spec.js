/// <reference types="cypress" />

const mockOrganizationName = 'microsoft';
const mockRepoName = 'vscode';

context('Search Module', () => {
  beforeEach(() => {
    // TODO: improvement: read url from base config.should not hard coded.
    cy.visit('http://localhost:3000');
  });

  it('it should change the repo name when user type in input', () => {
    // TODO: use id or xpath for better test
    const input = cy.get("input[name='repoName']");
    input.type(mockRepoName);

    input.should('have.value', mockRepoName);
  });
  it('it should change the repo name when user type in input', () => {
    const input = cy.get("input[name='organizationName']");
    input.type(mockOrganizationName);

    input.should('have.value', mockOrganizationName);
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

  it('it should render issues when user enter valid data', () => {
    cy.get("input[name='organizationName']").type(mockOrganizationName);
    cy.get("input[name='repoName']").type(mockRepoName);
    cy.get("button[type='submit']").click();
    cy.contains('next');
    cy.contains('prev');
    cy.get('p.user');
  });

  it('it should render issues when user enter valid data', () => {
    cy.get("input[name='organizationName']").type(mockOrganizationName);
    cy.get("input[name='repoName']").type(mockRepoName);
    cy.get("button[type='submit']").click();
    cy.wait(5000);
    // TODO: intercept request and wait for finish not wait random number
    cy.contains('next');
    cy.contains('prev');
    cy.get('a.issue-item');
  });

  it('it should go next page when user click next', () => {
    cy.get("input[name='organizationName']").type(mockOrganizationName);
    cy.get("input[name='repoName']").type(mockRepoName);
    cy.get("button[type='submit']").click();
    cy.wait(5000);
    // TODO: intercept request and wait for finish not wait random number
    cy.get('li.next').click();
    cy.get('li.active').contains('1');
  });
});
