Feature: Busca de Produto

  Scenario: Buscar um produto existente

    Given que acesso a página de produtos
    When pesquiso pelo produto "Blue Top"
    Then devo visualizar o produto na lista de resultados