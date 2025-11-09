import { Given, When } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page.js';
import ProductsPage from '../pages/products.page.js';
import CartPage from '../pages/cart.page.js';
import CheckoutPage from '../pages/checkout.page.js';

Given('I am on the {string} page', async (pageName) => {
    if (pageName === 'login') {
        await LoginPage.open();
    }
    else { 
        await ProductsPage.open();
    }
    });

When('I login with username {string} and password {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

When('I add {string} to cart', async (productName) => {
    await ProductsPage.addToCart(productName);
});
When('I go to {string}', async (page) => {
    if (page === 'cart') {
        await CartPage.open();
    }
});
When('I proceed to checkout', async () => {
    await CartPage.proceedToCheckout();
});
When('I fill checkout information {string} {string} {string}', async(firstName, lastName, postalCode) => {
    await CheckoutPage.fillCheckoutInformation(firstName,lastName,postalCode);
});
When('I continue', async () => {
    await CheckoutPage.clickContinue();
});
When('I finish', async () =>{
    await CheckoutPage.clickFinish();
});