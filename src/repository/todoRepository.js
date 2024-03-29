const ApiError = require('../errors/apiError');
const Todo = require('../model/todo');

const addTodo = async (text, userId) => {
  const todo = new Todo({ text, isDone: false, userId });
  await todo.save();
  return todo;
};

const findTodos = async (userId) => {
  return await Todo.findAll({
    where: { userId }
  });
};

const findTodo = async (id, userId) => {
  return await Todo.findOne({
    where: {
      id, userId
    }
  });
}

const updateTodo = async (id, updatedData, userId) => {
  const todo = await findTodo(id, userId)

  if (!todo) { throw new ApiError('Todo not found', 404) };

  await todo.update(updatedData);
};

const deleteTodo = async (id, userId) => {
  const todo = await findTodo(id, userId)

  if (!todo) { throw new ApiError('Todo not found', 404) };

  await todo.destroy();
}

module.exports = { addTodo, findTodos, findTodo, updateTodo, deleteTodo }