# Frontend Technical Test

Welcome to The Stars Group technical test for frontend test engineers!

These tasks are open ended but we recommend that you spend no more than a few hours on them.

The site we would like you to test can be found at: https://www.pokerstarssports.uk. Please bear in mind that the site is highly dynamic and both the content and the layout may change over time. You will not need to register an account or log in to the website to complete this test.

### Task 1
Write a number of BDD scenarios using Gherkin to test the following features:
- Adding things to, and removing things from, the bet slip
- Changing the odds format

### Task 2
Create a simple test framework using NPM, Cypress and Cucumber to automate a selection of the scenarios you have created. You should include at least two scenarios from each feature.
- https://www.npmjs.com
- https://www.cypress.io
- https://www.npmjs.com/package/cypress-cucumber-preprocessor


After completing the tasks, please update the README.md file with your scenarios from Task 1 and instructions on how to run your tests, include any information you think is relevant, interesting or useful. The preferred delivery method for this project is via Github but we will also accept a zipped file sent as an email attachment.

### Running the tests
1 - Pull the repo
2 - Npm install to grab the depndencies
3 - Npx cypress run will runn all the features
4 - It didnt work for me but Npx cypress run will open the runner and allow the tests to be triggered there also

### Ignored
Screenshots & Video Folders 

### Betslip Scenarios

  Scenario: A user can add single bet to the betslip
    When I select a single bet from odds boost
    Then I can see a "1" in the betslip counter

  Scenario: A user can add multiple bets to the betslip
    When I select all bets from odds boost
    Then I can see a "3" in the betslip counter

  Scenario: A user can remove a single bet from the betslip
    Given I select all bets from odds boost
    When I remove a single bet from the betslip
    Then I can see a "2" in the betslip counter

  Scenario: A user can remove a all bets from the betslip
    Given I select all bets from odds boost
    When I remove all bets from the betslip
    Then I can see a "0" in the betslip counter

### Odds Format Scenarios

  Scenario Outline: A user can change the odds format to <Odds>
    When I choose "<Odds>" from the odds dropdown
    Then I should see "<Odds>" in the odds selection

    Examples:
      | Odds       |
      | American   |
      | Decimal    |

### Thoughts
Initially I went with the links provided but hit a bit of a road block, Im not fully sure but it looks like the preprocessor changed hands and with that it changed to typescript?
https://github.com/badeball/cypress-cucumber-preprocessor

I think with cypress upgrading, it also meant that the usual cypress.json changed to another format so trying to understand what was happening threw me off.

The only difficulty I couldnt get my head around and didnt want to stall too long on was not being able to open and run the cypress runner, I dont know if this is an issue with the M1 macs but the runner would lod and then get stuck in a weird loop preventing me from debugging that way.