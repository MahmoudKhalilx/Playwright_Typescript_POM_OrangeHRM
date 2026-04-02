import { Locator, Page, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly dashboardHeader: Locator;
  readonly adminMenuLink: Locator;
  readonly pimMenuLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
    this.adminMenuLink = page.getByRole('link', { name: 'Admin' });
    this.pimMenuLink = page.getByRole('link', { name: 'PIM' });
  }

  async expectLoaded(): Promise<void> {
    await expect(this.dashboardHeader).toBeVisible();
  }

  async goToAdmin(): Promise<void> {
    await this.adminMenuLink.click();
  }

  async goToPim(): Promise<void> {
    await this.pimMenuLink.click();
  }
}
