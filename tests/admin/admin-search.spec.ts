import { credentials } from '../../fixtures/testData';
import { test } from '../../fixtures/pages.fixture';

test.describe('Admin Module', () => {
  test('user can search system users', async ({ loginPage, dashboardPage, adminPage }) => {
    await loginPage.goto();
    await loginPage.login(credentials.username, credentials.password);

    await dashboardPage.expectLoaded();
    await dashboardPage.goToAdmin();

    await adminPage.expectLoaded();
    await adminPage.searchByUsername(credentials.username);
    await adminPage.expectResultsVisible();
  });
});
