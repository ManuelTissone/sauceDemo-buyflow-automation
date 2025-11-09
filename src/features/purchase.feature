Feature: Shopping cart functionality
    
  As a customer 
  I want to purchase a product
  So that i can receive my order

  Scenario: Successfuly purchase a single product 
    Given I am on the "login" page 
    When I login with username "standard_user" and password "secret_sauce" 
    When I add "Sauce Labs Onesie" to cart
    And I go to "cart"
    Then I should see "Sauce Labs Onesie" in the cart
    When I proceed to checkout
    And I fill checkout information "Manuel" "Tissone" "7600"
    And I continue
    Then I should see "Sauce Labs Onesie" in the order summary
    And I finish 
    Then I should see "Thank you for your order!"
    