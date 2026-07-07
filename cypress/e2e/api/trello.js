import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

let resposta;

Given("que envio um GET para a action {string} da API", (actionId) => {
  cy.request({
    method: "GET",
    url: `https://api.trello.com/1/actions/${actionId}`,
    failOnStatusCode: false,
  }).then((res) => {
    resposta = res;
  });
});

Then("o status code da resposta deve ser {int}", (statusEsperado) => {
  expect(resposta.status).to.eq(statusEsperado);
});

Then("o campo {string} da estrutura {string} deve ser exibido", (campo, estrutura) => {
  // Atenção: a API do Trello retorna "list" aninhado dentro de "data",
  // e não na raiz do JSON. Estrutura real:
  // { ..., "data": { "list": { "name": "...", "id": "..." } } }
  expect(resposta.body).to.have.property("data");
  expect(resposta.body.data).to.have.property(estrutura);
  expect(resposta.body.data[estrutura]).to.have.property(campo);

  const valor = resposta.body.data[estrutura][campo];
  cy.log(`data.${estrutura}.${campo} = ${valor}`);

  expect(valor).to.be.a("string");
  expect(valor.length).to.be.greaterThan(0);
});