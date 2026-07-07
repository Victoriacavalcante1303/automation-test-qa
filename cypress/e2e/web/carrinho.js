import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página de produtos", () => {
  cy.visit("/products");
});

When("adiciono o produto {string} ao carrinho", (produto) => {
  cy.contains(".productinfo p", produto)
    .parents(".product-image-wrapper")
    .trigger("mouseover");

  cy.contains("Add to cart").click();

  cy.contains("View Cart").click();
});

Then("o produto deve ser exibido no carrinho", () => {
  cy.contains("Blue Top").should("be.visible");
});