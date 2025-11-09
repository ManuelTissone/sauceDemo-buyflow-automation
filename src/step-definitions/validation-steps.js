import { Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import ProductsPage from '../pages/products.page.js';
import LoginPage from '../pages/login.page.js';
import CartPage from '../pages/cart.page.js';
import CheckoutPage from '../pages/checkout.page.js';

Then('I should be redirected to the products page', async () => {
    const title = await ProductsPage.getPageTitle();
    expect(title).toContain("Products");
});

Then('the page title should {string} {string}', async (comparisonType, expectedText) => {
    const title = await ProductsPage.getPageTitle();
    if (comparisonType === "contain") {
        expect(title).toContain(expectedText);
    }
    else {
        expect(title).toBe(expectedText);
    }
});

Then('I should see an error message', async () => {
    const error = await LoginPage.errorMsg.isDisplayed();
    expect(error).toBe(true);
});

Then('the error message should {string} {string}', async (comparisonType, expectedText) =>{
    const error = await LoginPage.errorMsg.getText();
    if (comparisonType === 'contain'){
        expect(error).toContain(expectedText);
    }
    else {
        expect(error).toBe(expectedText);
    }
});

Then('I should see {string} in the cart', async (itemName) => {
    const item = await CartPage.isProductInCart(itemName);
    expect(item).toBe(true);
});

Then('I should see {string} in the order summary', async (itemName) => {
    const item = await CheckoutPage.getProductName();
    expect(item).toBe(itemName);
});

Then('the total should be {string}', async (expectedTotal) => {
    const total = await CheckoutPage.getTotal();
    expect(total).toBe(expectedTotal);
});

Then('I should see {string}', async (confirmationMessage) => {
    const msg = await CheckoutPage.getConfirmationMessage();
    expect(msg).toContain(confirmationMessage);
});
