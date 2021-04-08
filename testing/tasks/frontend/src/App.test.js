import puppeteer from 'puppeteer'

describe('App', () => {
  it(
    'should sign in correctly and redirect user to tasks view',
    async () => {
      const user = { email: 'maria@test.com', password: '12345' }
      const browser = await puppeteer.launch({ headless: false })

      const page = await browser.newPage()

      await page.goto('http://localhost:3000')

      await page.waitForSelector('input#email')

      await page.type('input#email', user.email, { delay: 100 })
      await page.type('input#password', user.password, { delay: 100 })
      await page.click('button[data-testid="signup"]')

      await page.waitForSelector('div.tasks')

      const content = await page.$eval('h1', el => el.innerHTML)
      const paragraph = await page.$eval('div.tasks > p', el => el.innerHTML)

      expect(content).toMatch(/tasks/i)
      expect(paragraph).toMatch(/no tasks created yet/i)

      await browser.close()
    }
  )
})
