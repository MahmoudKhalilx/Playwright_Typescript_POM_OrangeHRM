# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin\admin-user-lifecycle.spec.ts >> Admin User Lifecycle >> create, verify, search, delete, and verify record count changes
- Location: tests\admin\admin-user-lifecycle.spec.ts:6:7

# Error details

```
Error: No selectable employee found in autocomplete for Add User form.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Admin" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: Richard Dan
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: User Management
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - generic [ref=e136]:
              - text: Job
              - generic [ref=e137]: 
          - listitem [ref=e138] [cursor=pointer]:
            - generic [ref=e139]:
              - text: Organization
              - generic [ref=e140]: 
          - listitem [ref=e141] [cursor=pointer]:
            - generic [ref=e142]:
              - text: Qualifications
              - generic [ref=e143]: 
          - listitem [ref=e144] [cursor=pointer]:
            - link "Nationalities" [ref=e145]:
              - /url: "#"
          - listitem [ref=e146] [cursor=pointer]:
            - link "Corporate Branding" [ref=e147]:
              - /url: "#"
          - listitem [ref=e148] [cursor=pointer]:
            - generic [ref=e149]:
              - text: Configuration
              - generic [ref=e150]: 
          - button "" [ref=e152] [cursor=pointer]:
            - generic [ref=e153]: 
  - generic [ref=e154]:
    - generic [ref=e157]:
      - heading "Add User" [level=6] [ref=e158]
      - separator [ref=e159]
      - generic [ref=e160]:
        - generic [ref=e162]:
          - generic [ref=e164]:
            - generic [ref=e166]: User Role*
            - generic [ref=e169] [cursor=pointer]:
              - generic [ref=e170]: Admin
              - generic [ref=e172]: 
          - generic [ref=e174]:
            - generic [ref=e176]: Employee Name*
            - generic [ref=e178]:
              - textbox "Type for hints..." [active] [ref=e180]: a
              - listbox [ref=e181]:
                - option "Searching...." [ref=e182] [cursor=pointer]
          - generic [ref=e184]:
            - generic [ref=e186]: Status*
            - generic [ref=e189] [cursor=pointer]:
              - generic [ref=e190]: "-- Select --"
              - generic [ref=e192]: 
          - generic [ref=e194]:
            - generic [ref=e196]: Username*
            - textbox [ref=e198]
        - generic [ref=e200]:
          - generic [ref=e201]:
            - generic [ref=e202]:
              - generic [ref=e204]: Password*
              - textbox [ref=e206]
            - paragraph [ref=e207]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
          - generic [ref=e209]:
            - generic [ref=e211]: Confirm Password*
            - textbox [ref=e213]
        - separator [ref=e214]
        - generic [ref=e215]:
          - paragraph [ref=e216]: "* Required"
          - button "Cancel" [ref=e217] [cursor=pointer]
          - button "Save" [ref=e218] [cursor=pointer]
    - generic [ref=e219]:
      - paragraph [ref=e220]: OrangeHRM OS 5.8
      - paragraph [ref=e221]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e222] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  4   |   readonly page: Page;
  5   |   readonly recordsFoundText: Locator;
  6   |   readonly systemUsersHeader: Locator;
  7   |   readonly usernameFilterInput: Locator;
  8   |   readonly searchButton: Locator;
  9   |   readonly resetButton: Locator;
  10  |   readonly addButton: Locator;
  11  |   readonly resultTable: Locator;
  12  |   readonly saveButton: Locator;
  13  |   readonly confirmDeleteButton: Locator;
  14  | 
  15  |   constructor(page: Page) {
  16  |     this.page = page;
  17  |     this.recordsFoundText = page.locator("span:has-text('Records Found')").first();
  18  |     this.systemUsersHeader = page.getByRole('heading', { name: 'System Users' });
  19  |     this.usernameFilterInput = page.locator("//label[normalize-space()='Username']/ancestor::div[contains(@class,'oxd-input-group')]/div[2]//input");
  20  |     this.searchButton = page.getByRole('button', { name: 'Search' });
  21  |     this.resetButton = page.getByRole('button', { name: 'Reset' });
  22  |     this.addButton = page.getByRole('button', { name: /Add/ });
  23  |     this.resultTable = page.locator('.oxd-table-body');
  24  |     this.saveButton = page.getByRole('button', { name: 'Save' });
  25  |     this.confirmDeleteButton = page.getByRole('button', { name: /Yes, Delete/ });
  26  |   }
  27  | 
  28  |   async expectLoaded(): Promise<void> {
  29  |     await expect(this.page).toHaveURL(/admin/, { timeout: 15000 });
  30  |     await expect(this.systemUsersHeader).toBeVisible({ timeout: 15000 });
  31  |     await this.page.waitForLoadState('networkidle');
  32  | 
  33  |     await expect(this.recordsFoundText).toContainText('Records Found', { timeout: 15000 });
  34  |   }
  35  | 
  36  |   async searchByUsername(username: string): Promise<void> {
  37  |     await this.usernameFilterInput.fill(username);
  38  |     await this.searchButton.click();
  39  |   }
  40  | 
  41  |   async resetFilters(): Promise<void> {
  42  |     await this.resetButton.click();
  43  |   }
  44  | 
  45  |   async getRecordsCount(): Promise<number> {
  46  |     const text = await this.recordsFoundText.textContent();
  47  |     const count = Number(text?.match(/\d+/)?.[0]);
  48  |     if (Number.isNaN(count)) {
  49  |       throw new Error(`Could not parse records count from: "${text}"`);
  50  |     }
  51  |     return count;
  52  |   }
  53  | 
  54  |   async clickAddUser(): Promise<void> {
  55  |     await this.addButton.click();
  56  |   }
  57  | 
  58  |   private async selectDropdownOptionByLabel(label: string, optionText: string): Promise<void> {
  59  |     const fieldGroup = this.page.locator(
  60  |       `//label[normalize-space()='${label}']/ancestor::div[contains(@class,'oxd-input-group')]`,
  61  |     );
  62  |     const dropdown = fieldGroup.locator('.oxd-select-text').first();
  63  |     await dropdown.click();
  64  |     await this.page.getByRole('option', { name: optionText, exact: true }).click();
  65  |   }
  66  | 
  67  |   async fillRequiredUserData(
  68  |     username: string,
  69  |     password: string,
  70  |     employeeSearchText = 'a',
  71  |   ): Promise<void> {
  72  |     await this.selectDropdownOptionByLabel('User Role', 'Admin');
  73  | 
  74  |     const employeeNameInput = this.page.locator(
  75  |       "//label[normalize-space()='Employee Name']/ancestor::div[contains(@class,'oxd-input-group')]//input",
  76  |     );
  77  |     const employeeOption = this.page.locator(
  78  |       "//label[normalize-space()='Employee Name']/ancestor::div[contains(@class,'oxd-input-group')]//div[@role='listbox']//div[@role='option']",
  79  |     ).first();
  80  |     const searchCandidates = [employeeSearchText, 'a'];
  81  | 
  82  |     let employeeSelected = false;
  83  |     for (const candidate of searchCandidates) {
  84  |       await employeeNameInput.fill(candidate);
  85  |       await expect(employeeOption).toBeVisible({ timeout: 10000 });
  86  | 
  87  |       let optionText = '';
  88  |       for (let i = 0; i < 10; i++) {
  89  |         optionText = (await employeeOption.textContent())?.trim() ?? '';
  90  |         if (optionText && !/Searching/i.test(optionText)) {
  91  |           break;
  92  |         }
  93  |         // await this.page.waitForTimeout(200);
  94  |       }
  95  | 
  96  |       if (optionText && !/No Records Found/i.test(optionText) && !/Searching/i.test(optionText)) {
  97  |         await employeeOption.click();
  98  |         employeeSelected = true;
  99  |         break;
  100 |       }
  101 |     }
  102 | 
  103 |     if (!employeeSelected) {
> 104 |       throw new Error('No selectable employee found in autocomplete for Add User form.');
      |             ^ Error: No selectable employee found in autocomplete for Add User form.
  105 |     }
  106 | 
  107 |     await this.selectDropdownOptionByLabel('Status', 'Enabled');
  108 | 
  109 |     const newUsernameInput = this.page.locator(
  110 |       "//label[normalize-space()='Username']/ancestor::div[contains(@class,'oxd-input-group')]//input",
  111 |     );
  112 |     const passwordInput = this.page.locator(
  113 |       "//label[normalize-space()='Password']/ancestor::div[contains(@class,'oxd-input-group')]//input",
  114 |     );
  115 |     const confirmPasswordInput = this.page.locator(
  116 |       "//label[normalize-space()='Confirm Password']/ancestor::div[contains(@class,'oxd-input-group')]//input",
  117 |     );
  118 | 
  119 |     await newUsernameInput.fill(username);
  120 |     await passwordInput.fill(password);
  121 |     await confirmPasswordInput.fill(password);
  122 |   }
  123 | 
  124 |   async saveUser(): Promise<void> {
  125 |     await this.saveButton.click();
  126 |     await expect(this.page).toHaveURL(/viewSystemUsers/, { timeout: 15000 });
  127 |     await expect(this.systemUsersHeader).toBeVisible({ timeout: 15000 });
  128 |   }
  129 | 
  130 |   async deleteUserByUsername(username: string): Promise<void> {
  131 |     const row = this.page.locator('.oxd-table-card', { hasText: username }).first();
  132 |     await expect(row).toBeVisible();
  133 |     await row.locator('button:has(i.bi-trash)').click();
  134 |     await this.confirmDeleteButton.click();
  135 |   }
  136 | 
  137 |   async expectResultsVisible(): Promise<void> {
  138 |     await expect(this.resultTable).toBeVisible();
  139 |   }
  140 | }
  141 | 
```