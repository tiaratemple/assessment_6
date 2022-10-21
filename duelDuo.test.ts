
import { Builder, Capabilities, By } from "selenium-webdriver"
import { shallow } from 'enzyme';
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('When draw button is clicked show choices', async () => {
    const btn = await driver.findElement(By.id('choices'))
    const displayed = await btn.isDisplayed()
    const mockCallBack = jest.fn();

    const button = shallow(btn);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(displayed).toBe(true)
})