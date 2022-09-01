Feature: Pokerstars Odds Format

  Background: Navigate to Pokerstars
    Given I visit pokerstars

  Scenario Outline: A user can change the odds format to <Odds>
    When I choose "<Odds>" from the odds dropdown
    Then I should see "<Odds>" in the odds selection

    Examples:
      | Odds       |
      | American   |
      | Decimal    |