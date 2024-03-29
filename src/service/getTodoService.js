const ApiError = require("../errors/apiError");
const { findTodo } = require("../repository/todoRepository")

const getTodoService = async (id, userId) => {
  const todo = await findTodo(id, userId);

  if (!todo) throw new ApiError('Todo not found', 404);

  return todo;
}

module.exports = getTodoService;