const ApiError = require("../errors/apiError");

const validation = (schema, body) => {
  const { error } = schema.validate(body, { abortEarly: false });

  if (error) {
    const { details } = error;
    const message = details.map((i) => i.message).join(",");
    throw new ApiError(message, 422);
  }
};

module.exports = validation;