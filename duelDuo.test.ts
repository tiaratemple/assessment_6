
import { Builder, Capabilities, By } from "selenium-webdriver"
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/index.html')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id("title"))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('When draw button is clicked show choices', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    const botChoices = await driver.findElement(By.id('choices'))
    drawBtn.click()
    const displayed = await botChoices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('Clicking add to duo button displays the div with id player-duo', async () => {
    const addToDuoBtn = await driver.findElement(By.className("button.bot-btn"))
    const playerDuo = await driver.findElement(By.id('player-duo'))
    addToDuoBtn.click()
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})