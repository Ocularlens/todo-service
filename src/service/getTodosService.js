const { findTodos } = require("../repository/todoRepository");

const getTodosService = async () => {
  return await findTodos();
};


module.exports = getTodosService;