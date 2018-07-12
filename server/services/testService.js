const Promise = require("bluebird");
const getConnection = require("../config/mysql");

module.exports = async(email) => {
  const query = `SELECT * FROM users WHERE email = ?`
  let results = await Promise.using(getConnection(), connection => connection.execute(query, ["dafds@dasfsd.com"]))
  console.log(results);
  results = await Promise.using(getConnection(), connection => connection.execute(query, [email]))
  console.log(results);
  return results
}
