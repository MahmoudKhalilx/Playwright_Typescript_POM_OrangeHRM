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
  }) => {
    const newUserData = buildRuntimeUserData();
    const userSummary = `username="${newUserData.username}", password="${newUserData.password}"`;

    let firstEmployeeFirstName = '';
    let initialCount = 0;
    let countAfterAdd = 0;

    await test.step('1) Generate runtime user data', async () => {
      console.log(`Generated user data: ${userSummary}`);
    });

    await test.step('2) Login with admin credentials', async () => {
      await loginPage.goto();
      await loginPage.login(credentials.username, credentials.password);
      await dashboardPage.expectLoaded();
    });

    await test.step('3) Open PIM and capture first employee first name', async () => {
      await dashboardPage.goToPim();
      firstEmployeeFirstName = await pimPage.getFirstEmployeeFirstName();
      console.log(`Selected employee first name: "${firstEmployeeFirstName}"`);
    });

    await test.step('4) Open Admin and capture initial record count', async () => {
      await dashboardPage.goToAdmin();
      await adminPage.expectLoaded();
      initialCount = await adminPage.getRecordsCount();
      console.log(`Initial user count: ${initialCount}`);
    });

    await test.step(`5) Add new admin user (${newUserData.username})`, async () => {
      await adminPage.clickAddUser();
      await adminPage.fillRequiredUserData(
        newUserData.username,
        newUserData.password,
        firstEmployeeFirstName
      );
      await adminPage.saveUser();
    });

    await test.step('6) Verify record count increased after add', async () => {
      countAfterAdd = await adminPage.getRecordsCount();
      expect(countAfterAdd).toBeGreaterThan(initialCount);
      console.log(`User count after addition: ${countAfterAdd}`);
    });

    await test.step(`7) Search and verify created user (${newUserData.username})`, async () => {
      await adminPage.searchByUsername(newUserData.username);
      const createdUserRow = page
        .locator('.oxd-table-card', { hasText: newUserData.username })
        .first();
      await expect(createdUserRow).toBeVisible();
    });

    await test.step(`8) Delete created user (${newUserData.username}) and verify removal`, async () => {
      const createdUserRow = page
        .locator('.oxd-table-card', { hasText: newUserData.username })
        .first();

      await adminPage.deleteUserByUsername(newUserData.username);
      await expect(createdUserRow).toHaveCount(0);
    });

    await test.step('9) Reset filters and verify record count decreased', async () => {
      await adminPage.resetFilters();
      const countAfterDelete = await adminPage.getRecordsCount();
      expect(countAfterDelete).toBeLessThan(countAfterAdd);
      console.log(`User count after deletion: ${countAfterDelete}`);
    });
  });
});