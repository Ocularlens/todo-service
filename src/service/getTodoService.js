const ApiError = require("../errors/apiError");
const { findTodo } = require("../repository/todoRepository")

const getTodoService = async (id) => {
  const todo = await findTodo(id);

  if (!todo) throw new ApiError('Todo not found', 404);

  return todo;
}

module.exports = getTodoService;