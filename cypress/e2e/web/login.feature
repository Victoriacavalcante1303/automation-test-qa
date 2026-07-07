Feature: Login

  Scenario: Login válido

    Given que acesso a tela de login
    When informo usuário e senha válidos
    Then devo estar logado