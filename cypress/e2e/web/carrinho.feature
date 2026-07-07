Feature: Carrinho de Compras

  Scenario: Adicionar um produto ao carrinho

    Given que acesso a página de produtos
    When adiciono o produto "Blue Top" ao carrinho
    Then o produto deve ser exibido no carrinho