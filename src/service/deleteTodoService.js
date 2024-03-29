const { deleteTodo } = require("../repository/todoRepository");

const deleteTodoService = async (id, userId) => {
  await deleteTodo(id, userId);
}

module.exports = deleteTodoService;