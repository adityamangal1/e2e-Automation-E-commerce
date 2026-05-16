import { test, expect } from '@playwright/test';

const { expect } = require("@playwright/test");
const { request } = require("http");
const test = require("node:test");

test('employee list API should return employees', async ({ request }) => {
  const response = await request.get('/api/employees');

  expect(response.status()).toBe(200);

  const employees = await response.json();

  expect(Array.isArray(employees)).toBeTruthy();
  expect(employees.length).toBeGreaterThan(0);
  expect(employees[0]).toHaveProperty('id');
  expect(employees[0]).toHaveProperty('email');
});


test("Get users", async ({ request, baseURL }) => {

  const apiResponse = await request.get(`${baseURL}public/v2/users/`);
  expect(apiResponse.ok()).toBeTruthy();
  expect(apiResponse.status()).toBe(200);

});



test("api test", async ({request})=>{

    const apiResponse = request.get("https://testApi/api/v2");
    expect(apiResponse.ok()).toBeTruthy();
    expect(apiResponse.status()).toBe(200);
});
