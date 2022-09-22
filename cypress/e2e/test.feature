Feature: Testing

    Scenario Outline: Go to google.com
        Given I go to google
        Then I expect to see the google logo