const Joi = require('joi');

const updateTodoSchema = Joi.object({
  text: Joi.string().optional(),
  isDone: Joi.boolean().optional()
});

module.exports = updateTodoSchema;