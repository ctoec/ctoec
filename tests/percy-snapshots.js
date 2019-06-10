const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('https://beta.ctoec.org');
  await percySnapshot('homepage');

  await page.goto('https://beta.ctoec.org/learn-more/');
  await percySnapshot('learn-more');

  await page.goto('https://beta.ctoec.org/licensing/');
  await percySnapshot('licensing');
});
