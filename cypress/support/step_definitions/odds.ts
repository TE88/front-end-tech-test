import { When } from "@badeball/cypress-cucumber-preprocessor";

/**
 * Chooses an odds format from the dropdown using a specified option.
 * @param {string} selection The selection to chose from the dropdown.
 */
When("I choose {string} from the odds dropdown", (selection: string) => {
  cy.get('#priceFormat').click();
  cy.get(`#${selection}`).click();
});

/**
 * A specified odd format is checked against what in the dropdown.
 * @param {string} selection The selection to expect in the dropdown.
 */
When("I should see {string} in the odds selection", (selection: string) => {
  cy.get('.currentFormat').should('contain', selection);
});
