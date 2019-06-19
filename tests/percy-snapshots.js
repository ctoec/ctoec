const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://stage.ctoec.org');
  await percySnapshot('homepage');

  await page.goto('http://stage.ctoec.org/learn-more/');
  await percySnapshot('learn-more');

  await page.goto('http://stage.ctoec.org/licensing/');
  await percySnapshot('licensing');
});
