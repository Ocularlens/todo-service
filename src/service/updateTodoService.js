const { updateTodo } = require("../repository/todoRepository");

const updateTodoService = async (id, updatedData, userId) => {
  await updateTodo(id, updatedData, userId);
};

module.exports = updateTodoService;