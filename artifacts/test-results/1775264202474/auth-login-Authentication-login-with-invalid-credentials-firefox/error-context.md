# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.ts >> Authentication >> login with invalid credentials
- Location: tests\auth\login.spec.ts:13:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-alert-content-text')
Expected substring: "Invalid credentials: Invalid credentials 1"
Received string:    "Invalid credentials"

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.oxd-alert-content-text')
    3 × locator resolved to <p data-v-7b563373="" data-v-87fcf455="" class="oxd-text oxd-text--p oxd-alert-content-text">Invalid credentials</p>
      - unexpected value "Invalid credentials"

```

# Test source

```ts
  1  | ﻿import { Locator, Page, expect } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly usernameInput: Locator;
  6  |   readonly passwordInput: Locator;
  7  |   readonly loginButton: Locator;
  8  |   readonly invalidCredentialsMessage: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 |     this.usernameInput = page.getByRole('textbox', { name: 'Username' });
  13 |     this.passwordInput = page.getByRole('textbox', { name: 'Password' });
  14 |     this.invalidCredentialsMessage = page.locator('.oxd-alert-content-text');
  15 |     this.loginButton = page.getByRole('button', { name: 'Login' });
  16 |   }
  17 | 
  18 |   async goto(): Promise<void> {
  19 |     await this.page.goto('/web/index.php/auth/login');
  20 |     await expect(this.usernameInput).toBeVisible();
  21 |   }
  22 | 
  23 |   async login(username: string, password: string): Promise<void> {
  24 |     await this.usernameInput.fill(username);
  25 |     await this.passwordInput.fill(password);
  26 |     await this.loginButton.click();
  27 |   }
  28 | 
  29 |   async expectInvalidCredentialsError(message:string) {
> 30 |   await expect(this.invalidCredentialsMessage).toContainText(`Invalid credentials: ${message}`);
     |                                                ^ Error: expect(locator).toContainText(expected) failed
  31 | }
  32 | 
  33 | 
  34 | }
  35 | 
```