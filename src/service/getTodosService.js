const { findTodos } = require("../repository/todoRepository");

const getTodosService = async (userId) => {
  return await findTodos(userId);
};


module.exports = getTodosService;