module.exports = {
  default: {
    require: ['features/step-definitions/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber.json'
    ],
    publishQuiet: true
  }
};