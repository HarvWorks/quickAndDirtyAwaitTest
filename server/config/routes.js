const   tester         = require('../controllers/test.js');

module.exports = function (app) {
  app.post('/test', tester.tester);
}
