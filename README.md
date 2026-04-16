# E2E Automation - E-commerce

Playwright tests for an e-commerce application.

## Setup

```bash
npm install
npx playwright install
```

Create a `.env` file:
```
email=your_test_email@gmail.com
password=your_password
BASE_URL="URL"
```

## Run Tests

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/e2edemo.test.js

# Run in headed mode (see browser)
npx playwright test --headed

# Run with UI mode
npx playwright test --ui
```

## Test Coverage

- User login
- Add to cart
- Apply coupon
- Checkout flow
- Order history verification
- Calendar/date picker automation

## Reports

After running tests, view the report:
```bash
npx playwright show-report
```
