import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(
    /^I go to google$/,
    () => {
        cy.visit("https://www.google.com")
    }
)

Then(
    /^I expect to see the google logo$/,
    () => {
        cy.get("body")
    }
)