import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const EMAIL = "teste2021@teste.com.br";
const SENHA = "teste";

Given("que estou logado no sistema", () => {
  cy.visit("/login");
  cy.get('[data-qa="login-email"]').type(EMAIL);
  cy.get('[data-qa="login-password"]').type(SENHA);
  cy.get('[data-qa="login-button"]').click();
  cy.contains("Logged in as").should("be.visible");
});

Given("possuo um produto no carrinho", () => {
  cy.visit("/products");

  cy.contains(".productinfo p", "Blue Top")
    .parents(".product-image-wrapper")
    .trigger("mouseover");

  cy.contains("Add to cart").click();
  cy.contains("View Cart").click();
});

When("acesso a tela de pagamento", () => {
  cy.contains("Proceed To Checkout").click();
});

Then("devo visualizar o produto na tela de pagamento", () => {
  cy.contains("Blue Top").should("be.visible");
});