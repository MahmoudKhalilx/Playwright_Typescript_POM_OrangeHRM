import { credentials } from '../../fixtures/testData';
import { expect, test } from '../../fixtures/pages.fixture';

test.describe('Authentication', () => {
  test('user can login successfully', async ({ loginPage, dashboardPage, page }) => {
    await loginPage.goto();
    await loginPage.login(credentials.username, credentials.password);

    await expect(page).toHaveURL(/dashboard/);
    await dashboardPage.expectLoaded();
  });

  test('login with invalid credentials', async ({ loginPage, page }) => {
    const invalidPassword = `${credentials.password}_2`;

    await test.step('Open login page', async () => {
    });

    await test.step('Login with invalid credentials', async () => {
      await loginPage.goto();
      await loginPage.login(credentials.username, invalidPassword);
    });

    await test.step('Verify invalid credentials message is shown to be Failed', async () => {
      await loginPage.expectInvalidCredentialsError("Invalid credentials 1");
    });
  });
});
