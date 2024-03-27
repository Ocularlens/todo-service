const Joi = require('joi');

const addTodoSchema = Joi.object({
  text: Joi.string().required()
});

module.exports = addTodoSchema;