exports.config = {
  allScriptsTimeout: 15000,
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['GoldenPathStory.js'],
  onPrepare: function () {
          global.EC = protractor.ExpectedConditions;
  }
};