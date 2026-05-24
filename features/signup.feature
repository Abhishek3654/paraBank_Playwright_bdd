Feature: Parabank Sign Up and Login
  Scenario: User creates account and logs in successfully
    Given User launches parabank application
    When User registers a new account
    And User logs in with created credentials
    Then User should see account overview page
    And User prints account balance