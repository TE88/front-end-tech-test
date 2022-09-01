Feature: Pokerstars Betslip

  Background: Navigate to Pokerstars
    Given I visit pokerstars

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