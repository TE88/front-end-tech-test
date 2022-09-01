import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

/**
 * Clicks a first bet from the odds boost section
 */
When("I select a single bet from odds boost", () => {
  cy.get('.oddsBoost-content em').first().click();
});

/**
 * Iterates over the bets in the odds boost section and click each (3 items)
 */
When("I select all bets from odds boost", () => {
  cy.get('.oddsBoost-content em').each((el) => {
    cy.wrap(el).click();
  })
});

/**
 * confirms the bet counter contains a specified count
 * @param {string} count The expected count on the betslip counter.
 */
Then("I can see a {string} in the betslip counter", (count: string) => {
  cy.get('.singleBetsCounter').should('contain', `(${count})`);
});

/**
 * Removes a single item from the betslip clicking the first remove icon
 */
When("I remove a single bet from the betslip", () => {
  cy.get('.remove ').first().click();
});

/**
 * removes all from betslip and confirm decision
 */
When("I remove all bets from the betslip", () => {
  cy.get('.remove-all').click();
  cy.get('.-yes').click()
});

