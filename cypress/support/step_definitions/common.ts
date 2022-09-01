import { Given } from "@badeball/cypress-cucumber-preprocessor";

const url = 'https://www.pokerstarssports.uk/'

Given("I visit pokerstars", () => {
  cy.visit(url);

  // Remove the animations, prevents issues like slow loading and reduced need for timeouts.
  // Could potentially be put in a custom command?
  cy.get('body').invoke(
    'append',
    Cypress.$(`
      <style id="__cypress-animation-disabler">
        *, *:before, *:after {
          transition-property: none !important;
          animation: none !important;
        }
      </style>
    `),
  )

  // Dismiss cookie banner
  cy.get('#onetrust-accept-btn-handler').click();
});