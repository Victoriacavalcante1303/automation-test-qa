import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a tela de login", () => {
  cy.visit("/login");
});

When("informo usuário e senha válidos", () => {
  cy.get('[data-qa="login-email"]').type("teste2021@teste.com.br");
  cy.get('[data-qa="login-password"]').type("teste");
  cy.get('[data-qa="login-button"]').click();
});

Then("devo estar logado", () => {
  cy.contains("Logged in as").should("be.visible");
});