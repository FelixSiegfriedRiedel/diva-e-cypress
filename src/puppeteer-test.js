import puppeteer from 'puppeteer';
// Or import puppeteer from 'puppeteer-core';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch();

const page = await browser.newPage();

// Navigate the page to a URL.
await page.goto('https://developer.chrome.com/');
console.log('after opening');
// // Set screen size.
// await page.setViewport({width: 1080, height: 1024});
//
// // Type into search box.
// await page.locator('.devsite-search-field').fill('automate beyond recorder');
//
// // Wait and click on first result.
// await page.locator('.devsite-result-item-link').click();
//
// // Locate the full title with a unique string.
// const textSelector = await page
//     .locator('text/Customize and automate')
//     .waitHandle();
// const fullTitle = await textSelector?.evaluate(el => el.textContent);
//
// // Print the full title.
// console.log('The title of this blog post is "%s".', fullTitle);
//
// await browser.close();

await page.waitForFunction(
    'window.performance.timing.loadEventEnd - window.performance.timing.navigationStart >= 500'
);

console.log('after waiting');
// Getting the page source HTML
const pageSourceHTML = await page.content();

// Closing the browser
await browser.close();

console.log(pageSourceHTML); // Output the page source HTML