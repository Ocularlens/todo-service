const { addTodo } = require("../repository/todoRepository");

const addTodoService = async (text) => { 
  await addTodo(text);
};

module.exports = addTodoService;