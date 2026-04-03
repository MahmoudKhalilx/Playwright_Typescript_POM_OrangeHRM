import { expect, test } from '../../fixtures/pages.fixture';
import { credentials } from '../../fixtures/testData';
import { buildRuntimeUserData } from '../../utils/testDataFactory';

test.describe('Admin User Lifecycle', () => {
  test('create, verify, search, delete, and verify record count changes', async ({
    loginPage,
    dashboardPage,
    adminPage,
    pimPage,
    page,
  }, testInfo) => {

    await page.waitForLoadState('networkidle');

    const newUserData = buildRuntimeUserData();
    console.log(`Generated user data::newusername="${newUserData.username}", password="${newUserData.password}"`);

    await loginPage.goto();
    await loginPage.login(credentials.username, credentials.password);

    await dashboardPage.expectLoaded();
    await dashboardPage.goToPim();
    const firstEmployeeFirstName = await pimPage.getFirstEmployeeFirstName();

    await dashboardPage.goToAdmin();

    await adminPage.expectLoaded();
    const initialCount = await adminPage.getRecordsCount();
    console.log(`Initial user count: ${initialCount}`);
  
    await adminPage.clickAddUser();
    await adminPage.fillRequiredUserData(newUserData.username, newUserData.password, firstEmployeeFirstName);
    await adminPage.saveUser();


    const countAfterAdd = await adminPage.getRecordsCount();
    expect(countAfterAdd).toBeGreaterThan(initialCount);
    console.log(`User count after addition: ${countAfterAdd}`);

    await adminPage.searchByUsername(newUserData.username);
    const createdUserRow = page.locator('.oxd-table-card', { hasText: newUserData.username }).first();
    await expect(createdUserRow).toBeVisible();


    await adminPage.deleteUserByUsername(newUserData.username);
    await expect(createdUserRow).toHaveCount(0);

    await adminPage.resetFilters();
    const countAfterDelete = await adminPage.getRecordsCount();
    expect(countAfterDelete).toBeLessThan(countAfterAdd);
    console.log(`User count after deletion: ${countAfterDelete}`);
  });
});
