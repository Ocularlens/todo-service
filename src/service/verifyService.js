const ApiError = require('../errors/apiError');
const { JsonWebTokenError } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
const { findUserByUsername } = require('../repository/userRepository');

const verifyService = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await findUserByUsername(decoded.username);

    if (!user) throw new JsonWebTokenError('User not found');

    return true;
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      throw new ApiError('Invalid Token', 400);
    }
    throw error;
  }
};

module.exports = verifyService;