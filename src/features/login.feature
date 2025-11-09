Feature: Login functionality

  As a user of the e-commerce platform
  I want to be able to login
  So that I can access the product catalog

  Scenario: Successful login with valid credentials
    Given I am on the "login" page
    When I login with username "standard_user" and password "secret_sauce" 
    Then I should be redirected to the products page 
    And the page title should "contain" "Products"
  
  Scenario: Unsuccessful login with no valid username
    Given I am on the "login" page 
    When I login with username "bad_user" and password "secret_sauce"
    Then I should see an error message
    And the error message should "contain" "do not match"

  Scenario: Unsuccessful login with no valid password
    Given I am on the "login" page 
    When I login with username "standard_user" and password "wrong_pass" 
    Then I should see an error message 
    And the error message should "contain" "do not match"