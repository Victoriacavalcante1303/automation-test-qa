Feature: Consulta de ação do Trello via API

  Scenario: Consultar nome da lista de uma ação do Trello
    Given que envio um GET para a action "592f11060f95a3d3d46a987a" da API 
    Then o status code da resposta deve ser 200
    And o campo "name" da estrutura "list" deve ser exibido