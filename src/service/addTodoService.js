const { addTodo } = require("../repository/todoRepository");

const addTodoService = async (text, userId) => { 
  await addTodo(text, userId);
};

module.exports = addTodoService;