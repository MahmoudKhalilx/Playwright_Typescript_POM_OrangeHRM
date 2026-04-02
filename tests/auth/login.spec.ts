import { credentials } from '../../fixtures/testData';
import { expect, test } from '../../fixtures/pages.fixture';

test.describe('Authentication', () => {
  test('user can login successfully', async ({ loginPage, dashboardPage, page }) => {
    await loginPage.goto();
    await loginPage.login(credentials.username, credentials.password);

    await expect(page).toHaveURL(/dashboard/);
    await dashboardPage.expectLoaded();
  });
});
