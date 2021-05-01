const targetUrl = "https://www.google.com/";
const targetElement = "k1zIA"; //id or classname

////////////////////////////////////////////////

const puppeteer = require("puppeteer");
const fs = require("fs");

////////////////////////////////////////////////

const getTrees = async () => {

  //////// Cache config to make pupppeter faster
  const browser = await puppeteer.launch({
    userDataDir: "src/functions/cacheData",
  });

  //////// Alocating the new page
  const page = await browser.newPage();

  //////// Opens targeted url
  await page.goto(targetUrl);

  const elementCSS = await page.evaluate((targetElement) => {

    ////////////
    let target;
    if (document.getElementById(targetElement)) {
      target = document.getElementById(targetElement);
    } else {
      target = document.getElementsByClassName(targetElement)[0];
    }
    const targetCSS = window.getComputedStyle(target);
    let cssOne = {};
    for (let i = 0; i < targetCSS.length; i++) {
      const element = targetCSS[i];
      cssOne = {
        ...cssOne,
        [element]: targetCSS[element]
      };
    }
    ///////////
    target.removeAttribute("class");
    target.removeAttribute("id");
    const targetCSSclean = window.getComputedStyle(target);
    let cssTwo = {};
    for (let i = 0; i < targetCSSclean.length; i++) {
      const element = targetCSSclean[i];
      if (!(targetCSSclean[element] === cssOne[element]) && !element.includes("webkit")) {
        cssTwo = {
          ...cssTwo,
          [element]: cssOne[element] + "@#$"
        };
      }
    }

    cssTwo = 
      ".customComputedCSS " + 
      JSON.stringify(cssTwo)
      .replace(/"|\\/g, " ")
      .replace(/@#\$ ,/g, ";\n")
      .replace("\{", "\{\n")
      .replace("\}", "\n\}")
      .replace("@#$", "");

    return cssTwo;
  }, targetElement);
  browser.close();
  await fs.writeFile("src/pagesTrees/computedCSS.css", elementCSS, function (err) {
    if (err) return console.log("Erro ao salvar arquivo: ", err);
  });

}

getTrees();

