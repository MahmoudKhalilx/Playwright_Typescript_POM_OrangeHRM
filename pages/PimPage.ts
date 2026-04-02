import { Locator, Page, expect } from '@playwright/test';

export class PimPage {
  readonly page: Page;
  readonly employeeRows: Locator;
  readonly firstNameCellInFirstRow: Locator;

  constructor(page: Page) {
    this.page = page;
    this.employeeRows = page.locator('.oxd-table-card');
    this.firstNameCellInFirstRow = this.employeeRows.first().locator('.oxd-table-cell').nth(2);
  }

  async getFirstEmployeeFirstName(): Promise<string> {
    const firstRow = this.employeeRows.first();
    await expect(firstRow).toBeVisible({ timeout: 15000 });
    const firstName = (await this.firstNameCellInFirstRow.textContent())?.trim() ?? '';
    if (!firstName) {
      throw new Error('Could not get first name from first PIM record.');
    }

    return firstName;
  }
}
