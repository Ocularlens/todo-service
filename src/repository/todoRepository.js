const ApiError = require('../errors/apiError');
const Todo = require('../model/todo');

const addTodo = async (text) => {
  const todo = new Todo({ text, isDone: false });
  await todo.save();
  return todo;
};

const findTodos = async () => {
  return await Todo.findAll();
};

const findTodo = async (id) => {
  return await Todo.findByPk(id);
}

const updateTodo = async (id, updatedData) => {
  const todo = await findTodo(id)

  if (!todo) { throw new ApiError('Todo not found', 404) };

  await todo.update(updatedData);
};

const deleteTodo = async (id) => {
  const todo = await findTodo(id)

  if (!todo) { throw new ApiError('Todo not found', 404) };

  await todo.destroy();
}

module.exports = { addTodo, findTodos, findTodo, updateTodo, deleteTodo }