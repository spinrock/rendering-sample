import { expect, test } from '@playwright/test'

test.describe('Filter Todos(default)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Incompleted Todo Size', async ({ page }) => {
    // Arrange
    const expectedTodoLength = 4

    // Act
    const actualTodoSize = (await page.getByTestId('todoitem-card').all()).length

    // Assert
    expect(actualTodoSize).toBe(expectedTodoLength)
  })

  test('ALL Todo Size', async ({ page }) => {
    // Arrange
    const expectedTodoLength = 4

    // Act
    await page.getByText('Incompleted').click()
    await page.getByText('ALL').click()
    const actualTodoSize = (await page.getByTestId('todoitem-card').all()).length

    // Assert
    expect(actualTodoSize).toBe(expectedTodoLength)
  })

  test('Completed Todo Size', async ({ page }) => {
    // Arrange
    const expectedTodoLength = 0

    // Act
    await page.getByText('Incompleted').click()
    await page.getByText(/Completed/).click()
    const actualTodoSize = (await page.getByTestId('todoitem-card').all()).length

    // Assert
    expect(actualTodoSize).toBe(expectedTodoLength)
  })
})
