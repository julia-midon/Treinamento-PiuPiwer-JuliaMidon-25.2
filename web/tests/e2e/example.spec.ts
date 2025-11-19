import { test, expect } from '@playwright/test';

test('should navigate to the cadastro page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  
  await page.click('text=Cadastrar') 
  
  await expect(page).toHaveURL('http://localhost:3000/login') 
});