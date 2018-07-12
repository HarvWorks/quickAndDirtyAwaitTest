const Promise = require("bluebird");
const getConnection = require("../config/mysql");
const testService = require("../services/testService");

module.exports = {
	tester: async (req, res) => {
    let moo = []
    moo = await testService("moo10@moo.com")
    console.log(moo);
    moo = await testService("bobcycle2@bob.com")
    console.log(moo);
    return res.status(200).json(moo)
	}
}
