const puppeteer = require('puppeteer');

// IIFE - Inmediately invoked function expresion
(async () => {
  const browser = await puppeteer.launch()

  const page = await browser.newPage()

  await page.goto('https://google.com')

  await page.waitForSelector('input.gLFyf.gsfi')
  await page.type('input.gLFyf.gsfi', 'hola mundo', { delay: 100 })

  await page.click('div.o3j99.n1xJcf.Ne6nSd')
  await page.click('div.FPdoLc.tfB0Bf input.gNO89b')

  await page.waitForSelector('h3.LC20lb.DKV0Md')
  await page.screenshot({ path: './screenshot.png' })

  await browser.close()
})()
