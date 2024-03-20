const ApiError = require('./errors/apiError');
const registerSchema = require('./request/registerSchema');
const registerService = require('./service/registerService');
const response = require('./util/response');
const validation = require('./util/validation');

const register = async (context, req) => {
  try {
    validation(registerSchema, req.body);

    const { username, password } = req.body;
    await registerService(username, password);

    response(context, { message: "user registered" });
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      response(context, { errors: error.message }, error.statusCode);
    } else {
      response(context, { message: 'Internal Server Error' }, 500);
    }
  }
  context.done();
}

module.exports = {
  register
}