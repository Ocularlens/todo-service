const { addUser } = require("../repository/userRepository");
const md5 = require('md5')

const registerService = async (username, password) => {
  const ecryptedPass = md5(password);
  await addUser(username, ecryptedPass);
  return;
}

module.exports = registerService;