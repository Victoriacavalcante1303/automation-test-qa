Feature: Checkout

  Scenario: Validar produto na tela de pagamento

    Given que estou logado no sistema
    And possuo um produto no carrinho
    When acesso a tela de pagamento
    Then devo visualizar o produto na tela de pagamento