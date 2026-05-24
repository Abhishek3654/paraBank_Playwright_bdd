import { Page } from '@playwright/test';

export class AccountOverviewPage {
  constructor(private page: Page) {}

  
  async getBalance() {
    await this.page.waitForSelector('#accountTable', { state: 'visible' });

    const amount = await this.page
      .locator('#accountTable tbody tr:first-child td:nth-child(2)')
      .textContent();

    console.log('Account Balance is:', amount?.trim());
  }
}