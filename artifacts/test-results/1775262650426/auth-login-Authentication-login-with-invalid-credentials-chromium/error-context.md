# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.ts >> Authentication >> login with invalid credentials
- Location: tests\auth\login.spec.ts:13:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-alert-content-text')
Expected substring: "Invalid credentials"
Received string:    ""
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.oxd-alert-content-text')

```

# Test source

```ts
  1  | ﻿import { credentials } from '../../fixtures/testData';
  2  | import { expect, test } from '../../fixtures/pages.fixture';
  3  | 
  4  | test.describe('Authentication', () => {
  5  |   test('user can login successfully', async ({ loginPage, dashboardPage, page }) => {
  6  |     await loginPage.goto();
  7  |     await loginPage.login(credentials.username, credentials.password);
  8  | 
  9  |     await expect(page).toHaveURL(/dashboard/);
  10 |     await dashboardPage.expectLoaded();
  11 |   });
  12 | 
  13 |   test('login with invalid credentials', async ({ loginPage, page }) => {
  14 |     const invalidPassword = `${credentials.password}_invalid`;
  15 | 
  16 |     await test.step('Open login page', async () => {
  17 |       await loginPage.goto();
  18 |     });
  19 | 
  20 |     await test.step('Login with invalid credentials', async () => {
  21 |       await loginPage.login(credentials.username, invalidPassword);
  22 |     });
  23 | 
  24 |     await test.step('Verify invalid credentials message is shown', async () => {
> 25 |       await expect(page.locator('.oxd-alert-content-text')).toContainText('Invalid credentials');
     |                                                             ^ Error: expect(locator).toContainText(expected) failed
  26 |       await expect(page).toHaveURL(/auth\/login/);
  27 |     });
  28 |   });
  29 | });
  30 | 
```