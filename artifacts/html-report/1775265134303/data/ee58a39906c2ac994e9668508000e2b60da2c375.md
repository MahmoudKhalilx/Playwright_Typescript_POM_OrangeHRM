# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin\admin-user-lifecycle.spec.ts >> Admin User Lifecycle >> create, verify, search, delete, and verify record count changes
- Location: tests\admin\admin-user-lifecycle.spec.ts:6:7

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: opensource-demo.orangehrmlive.com
      - text: ’s DNS address could not be found. Diagnosing the problem.
    - generic [ref=e10]:
      - paragraph
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Try running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e14]: DNS_PROBE_STARTED
  - button "Reload" [ref=e17] [cursor=pointer]
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
> 19 |     await this.page.goto('/web/index.php/auth/login');
     |                     ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
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
  30 |   await expect(this.invalidCredentialsMessage).toContainText(`${message}`);
  31 | }
  32 | 
  33 | 
  34 | }
  35 | 
```