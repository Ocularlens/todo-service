const ApiError = require("../errors/apiError");
const { findUserByUsername } = require("../repository/userRepository");
const md5 = require('md5');
const jwt = require('jsonwebtoken');

const loginService = async (username, password) => {
  const user = await findUserByUsername(username);

  if (user.password !== md5(password)) {
    throw new ApiError('User not found', 404);
  }

  return jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = loginService;