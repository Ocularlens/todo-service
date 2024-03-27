const { deleteTodo } = require("../repository/todoRepository");

const deleteTodoService = async (id) => {
  await deleteTodo(id);
}

module.exports = deleteTodoService;