const ApiError = require('../errors/apiError');
const checkAuth = require('./checkAuth');
const response = require('./response');

const coreHandler = async (context, req, callback) => {
  try {
    const userId = await checkAuth(req);

    req.userId = userId;

    await callback();
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      response(context, { errors: error.message }, error.statusCode);
    } else {
      response(context, { message: 'Internal Server Error' }, 500);
    }
  }
  context.done();
};

module.exports = coreHandler;