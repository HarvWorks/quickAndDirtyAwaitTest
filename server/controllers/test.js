const Promise = require("bluebird");
const getConnection = require("../config/mysql");
const testService = require("../services/testService");

module.exports = {
	tester: async (req, res) => {
    try {
      let moo = []
      moo = await testService("moo10@moo.com", 1)
      console.log(moo);
      moo = await testService("bobcycle@bob.com", 2)
      console.log(moo);
      moo = await testService("moo10@moo.com", 3)
      console.log(moo);
      return res.status(200).json(moo)
    } catch (error) {
      return res.status(400).json(error)
    }
	}
}
