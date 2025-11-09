# E-Commerce Test Automation Project

This is my automation testing project for [Sauce Demo](https://www.saucedemo.com/), an e-commerce demo website. I built it to practice and learn test automation using Cucumber and WebdriverIO.

## About This Project

I created this project while learning QA Automation. It shows what I've learned about writing automated tests, working with the Page Object Model, and using BDD (Behavior-Driven Development) to write tests that are easy to read.

**Current Status:** 23 tests passing | 0 failing

## What I Learned

While building this project, I learned:

- How to use **Page Object Model** to organize test code better
- Writing test scenarios with **Cucumber** that anyone can understand
- Working with different types of **selectors** to find elements on a page
- Using **async/await** in JavaScript for handling page actions
- How to debug tests when they fail
- Organizing code to make it easier to maintain and update

## Technologies Used

- **Test Framework:** WebdriverIO
- **BDD Tool:** Cucumber
- **Language:** JavaScript
- **Pattern:** Page Object Model
- **Browser:** Chrome

## Project Structure

```
SauceDemo E-commerce/
├── src/
│   ├── features/
│   │   ├── login.feature           # Login functionality scenarios
│   │   └── purchase.feature        # E2E purchase flow scenarios
│   ├── pages/
│   │   ├── login.page.js          # Login page object
│   │   ├── products.page.js       # Products page object
│   │   ├── cart.page.js           # Shopping cart page object
│   │   └── checkout.page.js       # Checkout flow page object
│   └── step-definitions/
│       ├── action-steps.js        # Action steps (Given, When, And)
│       └── validation-steps.js    # Validation steps (Then)
├── wdio.conf.js                   # WebdriverIO configuration
└── package.json                   # Project dependencies
```

## What the Tests Cover

### Login Tests
- Login with correct username and password
- Login with wrong username
- Login with wrong password

### Purchase Test (Full Flow)
This test goes through the complete buying process:
1. Login to the site
2. Add a product to the cart
3. Check that the product is in the cart
4. Go to checkout
5. Fill in shipping information
6. Verify order details
7. Complete the purchase

## How to Run This Project

### What You Need
- Node.js installed on your computer
- npm (comes with Node.js)

### Setup

1. Download the project:
```bash
git clone <(https://github.com/ManuelTissone/SauceDemo-E-commerce)>
cd SauceDemoE-commerce
```

2. Install everything needed:
```bash
npm install
```

## Running the Tests

Run all tests:
```bash
npx wdio run wdio.conf.js
```

Run only login tests:
```bash
npx wdio run wdio.conf.js --spec src/features/login.feature
```

Run only purchase tests:
```bash
npx wdio run wdio.conf.js --spec src/features/purchase.feature
```

## How I Organized the Code

### Page Object Model
I created a separate file for each page of the website. Each file has:
- **Selectors:** How to find elements on the page
- **Methods:** Actions you can do on that page (like clicking or typing)

This makes the code easier to update. If the website changes, I only need to update one file.

### Separating Actions and Validations
I split the test steps into two files:
- **action-steps.js:** Steps that do things (login, click, type)
- **validation-steps.js:** Steps that check if something is correct

This keeps things organized and easy to find.

### Smart Product Selection
When adding products to the cart, I made the code smart enough to work with any product name. It automatically converts "Sauce Labs Onesie" into the right selector format that the website needs.

## Problems I Solved

### Problem 1: Finding the Right Button for Each Product
Each product has its own "Add to cart" button with a different ID. I needed a way to click the right button for any product.

**My solution:** I wrote code that takes the product name and transforms it into the correct button ID automatically.

### Problem 2: Checking if a Product is in the Cart
The cart can have many products, so I needed to search through all of them to find a specific one.

**My solution:** I created a method that loops through all items in the cart and returns true or false if it finds the product.

### Problem 3: Handling Multiple Checkout Pages
The checkout process has 3 different pages (form, summary, confirmation), and I wasn't sure if I should create 3 separate files.

**My solution:** I put everything in one file (`checkout.page.js`) but organized it with clear method names for each page. This keeps it simple without making too many files.

## What I Want to Add Next

As I keep learning, I plan to:

- Add more test cases (negative scenarios, error handling)
- Test buying multiple products at once
- Try cross-browser testing (Firefox, Edge)
- Add screenshots when tests fail
- Create better test reports
- Set up CI/CD with GitHub Actions
- Make tests run faster by running them in parallel

## What I Learned From This Project

**Plan before coding:** Taking time to think about the structure before writing code saved me a lot of time later.

**Stay organized:** Using consistent names and patterns made it much easier to work with the code.

**Read error messages carefully:** When tests failed, reading the error messages slowly helped me find and fix problems on my own.

**Best practices matter:** Following patterns like Page Object Model made my code look more professional and easier to maintain.

## About Me

I'm learning QA Automation and building projects to practice what I learn. I created this project to understand how professional test automation works.

If you have any feedback or suggestions, I'd love to hear them!

## Contact

- **LinkedIn:** www.linkedin.com/in/manuel-tissone-585b10378
- **Email:** m.mtissone@gmail.com
- **GitHub:** https://github.com/ManuelTissone

---

This is a learning project I created to practice test automation. I'm actively working on improving it as I learn more.
