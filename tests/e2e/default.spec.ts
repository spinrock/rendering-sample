import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('has title', async ({ page }) => {
  // Arrange
  const expectedTitle = 'Next.js Template(TodoList)'

  // Act

  // Assert
  await expect(page).toHaveTitle(expectedTitle)
})

test('has header', async ({ page }) => {
  // Arrange
  const expectedHeaderTitle = 'This is Next.js Template'

  // Act
  const actualHeaderTitle = await page.getByTestId('header-title').innerHTML()

  // Assert
  expect(actualHeaderTitle).toEqual(expectedHeaderTitle)
})
