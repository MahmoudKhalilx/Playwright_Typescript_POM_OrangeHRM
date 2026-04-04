# Playwright TypeScript OrangeHRM

## Setup

Install dependencies:

```bash
npm install
npx playwright install
```

## Run Tests

```bash
npx playwright test tests/admin/admin-user-lifecycle.spec.ts --project=chromium --headed

npx playwright test -g "login with invalid credentials" --project=chromium --headed

```

## Project Structure

- `pages/` - page objects
- `tests/` - test files
- `fixtures/` - shared fixtures and test data
- `utils/` - helper functions

## Notes

- Framework: Playwright + TypeScript
- Pattern: Page Object Model
