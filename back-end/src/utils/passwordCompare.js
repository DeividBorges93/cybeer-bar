const md5 = require('md5');

function passwordCompare(password, userPassword) {
  const hashPassword = md5(password);
  return (userPassword === hashPassword);
}

module.exports = passwordCompare;
