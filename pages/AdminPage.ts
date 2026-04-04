import { Locator, Page, expect } from '@playwright/test';

export class AdminPage {
  readonly page: Page;
  readonly recordsFoundText: Locator;
  readonly systemUsersHeader: Locator;
  readonly usernameFilterInput: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly addButton: Locator;
  readonly resultTable: Locator;
  readonly saveButton: Locator;
  readonly confirmDeleteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.recordsFoundText = page.locator("span:has-text('Records Found')").first();
    this.systemUsersHeader = page.getByRole('heading', { name: 'System Users' });
    this.usernameFilterInput = page.locator("//label[normalize-space()='Username']/ancestor::div[contains(@class,'oxd-input-group')]/div[2]//input");
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.resetButton = page.getByRole('button', { name: 'Reset' });
    this.addButton = page.getByRole('button', { name: /Add/ });
    this.resultTable = page.locator('.oxd-table-body');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.confirmDeleteButton = page.getByRole('button', { name: /Yes, Delete/ });
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/admin/, { timeout: 15000 });
    await expect(this.systemUsersHeader).toBeVisible({ timeout: 15000 });
    await this.page.waitForLoadState('networkidle');

    await expect(this.recordsFoundText).toContainText('Records Found', { timeout: 15000 });
  }

  async searchByUsername(username: string): Promise<void> {
    await this.usernameFilterInput.fill(username);
    await this.searchButton.click();
  }

  async resetFilters(): Promise<void> {
    await this.resetButton.click();
  }

  async getRecordsCount(): Promise<number> {
    const text = await this.recordsFoundText.textContent();
    const count = Number(text?.match(/\d+/)?.[0]);
    if (Number.isNaN(count)) {
      throw new Error(`Could not parse records count from: "${text}"`);
    }
    return count;
  }

  async clickAddUser(): Promise<void> {
    await this.addButton.click();
  }

  private async selectDropdownOptionByLabel(label: string, optionText: string): Promise<void> {
    const fieldGroup = this.page.locator(
      `//label[normalize-space()='${label}']/ancestor::div[contains(@class,'oxd-input-group')]`,
    );
    const dropdown = fieldGroup.locator('.oxd-select-text').first();
    await dropdown.click();
    await this.page.getByRole('option', { name: optionText, exact: true }).click();
  }

  async fillRequiredUserData(
    username: string,
    password: string,
    employeeSearchText = 'a',
  ): Promise<void> {
    await this.selectDropdownOptionByLabel('User Role', 'Admin');

    const employeeNameInput = this.page.locator(
      "//label[normalize-space()='Employee Name']/ancestor::div[contains(@class,'oxd-input-group')]//input",
    );
    const employeeOption = this.page.locator(
      "//label[normalize-space()='Employee Name']/ancestor::div[contains(@class,'oxd-input-group')]//div[@role='listbox']//div[@role='option']",
    ).first();
    const searchCandidates = [employeeSearchText, 'a'];

    let employeeSelected = false;
    for (const candidate of searchCandidates) {
      await employeeNameInput.fill(candidate);
      await expect(employeeOption).toBeVisible({ timeout: 30000 });

      let optionText = '';
      for (let i = 0; i < 10; i++) {
        optionText = (await employeeOption.textContent())?.trim() ?? '';
        if (optionText && !/Searching/i.test(optionText)) {
          break;
        }
        await this.page.waitForTimeout(200);
      }

      if (optionText && !/No Records Found/i.test(optionText) && !/Searching/i.test(optionText)) {
        await employeeOption.click();
        employeeSelected = true;
        break;
      }
    }

    if (!employeeSelected) {
      throw new Error('No selectable employee found in autocomplete for Add User form.');
    }

    await this.selectDropdownOptionByLabel('Status', 'Enabled');

    const newUsernameInput = this.page.locator(
      "//label[normalize-space()='Username']/ancestor::div[contains(@class,'oxd-input-group')]//input",
    );
    const passwordInput = this.page.locator(
      "//label[normalize-space()='Password']/ancestor::div[contains(@class,'oxd-input-group')]//input",
    );
    const confirmPasswordInput = this.page.locator(
      "//label[normalize-space()='Confirm Password']/ancestor::div[contains(@class,'oxd-input-group')]//input",
    );

    await newUsernameInput.fill(username);
    await passwordInput.fill(password);
    await confirmPasswordInput.fill(password);
  }

  async saveUser(): Promise<void> {
    await this.saveButton.click();
    await expect(this.page).toHaveURL(/viewSystemUsers/, { timeout: 15000 });
    await expect(this.systemUsersHeader).toBeVisible({ timeout: 15000 });
  }

  async deleteUserByUsername(username: string): Promise<void> {
    const row = this.page.locator('.oxd-table-card', { hasText: username }).first();
    await expect(row).toBeVisible();
    await row.locator('button:has(i.bi-trash)').click();
    await this.confirmDeleteButton.click();
  }

  async expectResultsVisible(): Promise<void> {
    await expect(this.resultTable).toBeVisible();
  }
}
