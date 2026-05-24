import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { expect } from '@playwright/test';
import { RegisterPage } from '../../pages/RegisterPage';
import { LoginPage } from '../../pages/LoginPage';
import { AccountOverviewPage } from '../../pages/AccountOverviewPage';
import testData from '../../testData/userData.json'

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.page = await this.browser.newPage();
  this.username = `user${Date.now()}`;
  this.password = 'Test@123';
});

After(async function () {
  await this.browser?.close();
});


Given('User launches parabank application', async function () {
  const registerPage = new RegisterPage(this.page);
  await registerPage.goto();
});


When('User registers a new account', async function () {
  const registerPage = new RegisterPage(this.page);
  await registerPage.clickRegister();
  await registerPage.registerUser(this.username, this.password, testData);
});


When('User logs in with created credentials', async function () {
  await this.page.locator('text=Log Out').click();
  const loginPage = new LoginPage(this.page);
  await loginPage.login(this.username, this.password);
});


Then('User should see account overview page', async function () {
  await expect(this.page).toHaveURL(/overview/);
  console.log('Login successful');
});

Then('User prints account balance', async function () {
  const overviewPage = new AccountOverviewPage(this.page);
  await overviewPage.getBalance();
  await this.page.screenshot({
    path: `screenshots/login-success.png`,
    fullPage: true
  });
});