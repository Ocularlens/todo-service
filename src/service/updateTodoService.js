const { updateTodo } = require("../repository/todoRepository");

const updateTodoService = async (id, updatedData) => {
  await updateTodo(id, updatedData);
};

module.exports = updateTodoService;