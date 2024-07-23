import { test, expect } from '@playwright/test';

test('e2e', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const heading = page.getByRole('heading', { name: 'Dad Jokes' });
  await expect(heading).toBeVisible();
  await expect(page.getByRole('button', { name: 'Get Another Joke' })).toBeVisible();
  const addJokeBtn = page.getByRole('button', { name: 'Add Joke' });
  await addJokeBtn.click();
  await expect(page.getByLabel('Question')).toBeVisible();
  await page.getByLabel('Question').fill('Test Fora');
  await expect(page.getByLabel('Answer')).toBeVisible();
  await page.getByLabel('Answer').fill('Test Odgovor');
  await expect(page.getByLabel('Rating')).toBeVisible();
  await page.getByLabel('Rating').fill('5');
  await addJokeBtn.click();
  const homeBtn = page.getByRole('button', { name: 'Home' });
  await homeBtn.click();
  await page.getByRole('button', { name: 'List All Jokes' }).click();
  const newJokeCard = page.locator('.card-body').last();
  const textContent = await newJokeCard.textContent();
  expect(textContent).toContain('Test Fora');
  expect(textContent).toContain('Test Odgovor');
  expect(textContent).toContain('5');
  await newJokeCard.locator('text=Delete').click();
  await homeBtn.click();
  await expect(heading).toBeVisible();
});
