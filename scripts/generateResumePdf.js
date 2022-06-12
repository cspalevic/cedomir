const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  await page.goto("http://localhost:3000/resume");
  const resumeHtml = await page.$eval("#resume", (element) => {
    const downloadButton = element.querySelector("#download-resume");
    downloadButton.parentNode.removeChild(downloadButton);
    return element.outerHTML;
  });
  page = await browser.newPage();
  await page.setContent(resumeHtml);
  await page.addStyleTag({
    path: path.join(__dirname, "..", "app/styles/tailwind.css"),
  });
  await page.pdf({
    path: path.join(
      __dirname,
      "..",
      "public/images/CharlieSpalevic_Resume.pdf"
    ),
    format: "legal",
    printBackground: true,
    scale: 0.75,
  });
  await browser.close();
})();
