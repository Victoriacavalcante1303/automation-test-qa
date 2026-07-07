import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página de produtos", () => {
  cy.visit("/products");
});

When("pesquiso pelo produto {string}", (produto) => {
  cy.get("#search_product").type(produto);
  cy.get("#submit_search").click();
});

Then("devo visualizar o produto na lista de resultados", () => {
  cy.contains("Blue Top").should("be.visible");
});