const   tester         = require('../controllers/test.js');

module.exports = function (app) {
  app.get('/test', tester.tester);
}
