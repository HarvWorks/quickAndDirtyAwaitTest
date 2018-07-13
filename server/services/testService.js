const Promise = require("bluebird");
const getConnection = require("../config/mysql");

module.exports = async(email, index) => {
  const query = `SELECT email FROM users WHERE email = ?`
  let results = await Promise.using(getConnection(), connection => connection.execute(query, ["dafds@dasfsd.com"])).spread(data => data)
  console.log(results, index);
  results = await Promise.using(getConnection(), connection => connection.execute(query, ["$moo3@mmos.com"])).spread(data => data)
  console.log(results, index);
  results = await Promise.using(getConnection(), connection => connection.execute(query, [email])).spread(data => data)
  console.log(results, index);
  return results
}
