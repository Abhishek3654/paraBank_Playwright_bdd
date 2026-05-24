import { Page } from '@playwright/test';

// ✅ Interface matches test-data.json exactly
interface UserData {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  ssn: string;
}

export class RegisterPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
  }

  async clickRegister() {
    await this.page.click('text=Register');
  }

  // ✅ Accepts username, password, and testData object — no undefined variables
  async registerUser(username: string, password: string, data: UserData) {
    await this.page.locator('[id="customer.firstName"]').fill(data.firstName);
    await this.page.locator('[id="customer.lastName"]').fill(data.lastName);
    await this.page.locator('[id="customer.address.street"]').fill(data.street);
    await this.page.locator('[id="customer.address.city"]').fill(data.city);
    await this.page.locator('[id="customer.address.state"]').fill(data.state);
    await this.page.locator('[id="customer.address.zipCode"]').fill(data.zipCode);
    await this.page.locator('[id="customer.phoneNumber"]').fill(data.phoneNumber);
    await this.page.locator('[id="customer.ssn"]').fill(data.ssn);

    await this.page.locator('[id="customer.username"]').fill(username);
    await this.page.locator('[id="customer.password"]').fill(password);
    await this.page.locator("#repeatedPassword").fill(password); 
    await this.page.locator('input[value="Register"]').click();
  }
}