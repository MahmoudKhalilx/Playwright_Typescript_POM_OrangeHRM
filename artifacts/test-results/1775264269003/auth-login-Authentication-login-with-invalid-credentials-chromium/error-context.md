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
Expected substring: "Invalid credentials 1"
Received string:    "Invalid credentials"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.oxd-alert-content-text')
    5 × locator resolved to <p data-v-7b563373="" data-v-87fcf455="" class="oxd-text oxd-text--p oxd-alert-content-text">Invalid credentials</p>
      - unexpected value "Invalid credentials"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e12]:
          - alert [ref=e13]:
            - generic [ref=e14]:
              - generic [ref=e15]: 
              - paragraph [ref=e16]: Invalid credentials
          - generic [ref=e18]:
            - paragraph [ref=e19]: "Username : Admin"
            - paragraph [ref=e20]: "Password : admin123"
        - generic [ref=e21]:
          - generic [ref=e23]:
            - generic [ref=e24]:
              - generic [ref=e25]: 
              - generic [ref=e26]: Username
            - textbox "Username" [active] [ref=e28]
          - generic [ref=e30]:
            - generic [ref=e31]:
              - generic [ref=e32]: 
              - generic [ref=e33]: Password
            - textbox "Password" [ref=e35]
          - button "Login" [ref=e37] [cursor=pointer]
          - paragraph [ref=e39] [cursor=pointer]: Forgot your password?
      - generic [ref=e40]:
        - generic [ref=e41]:
          - link [ref=e42] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e45] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e48] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e51] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e54]:
          - paragraph [ref=e55]: OrangeHRM OS 5.8
          - paragraph [ref=e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e57] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e59]
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
> 30 |   await expect(this.invalidCredentialsMessage).toContainText(`${message}`);
     |                                                ^ Error: expect(locator).toContainText(expected) failed
  31 | }
  32 | 
  33 | 
  34 | }
  35 | 
```