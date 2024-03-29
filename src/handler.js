const addTodoSchema = require('./request/addTodoSchema');
const updateTodoSchema = require('./request/updateTodoSchema');
const addTodoService = require('./service/addTodoService');
const deleteTodoService = require('./service/deleteTodoService');
const getTodoService = require('./service/getTodoService');
const getTodosService = require('./service/getTodosService');
const updateTodoService = require('./service/updateTodoService');
const coreHandler = require('./util/coreHandler');
const response = require('./util/response');
const validation = require('./util/validation');

const addTodo = async (context, req) => {
  await coreHandler(context, req, async () => {
    validation(addTodoSchema, req.body);

    const { text } = req.body;
    await addTodoService(text, req.userId);

    response(context, { message: "todo added" });
  });
}

const getTodos = async (context, req) => {
  await coreHandler(context, req, async () => {
    const todos = await getTodosService(req.userId);

    response(context, { todos });
  });
}

const updateTodo = async (context, req) => {
  await coreHandler(context, req, async () => {
    validation(updateTodoSchema, req.body);

    await updateTodoService(req.params.todoId, req.body, req.userId);

    response(context, { message: 'todo updated' });
  });
}

const deleteTodo = async (context, req) => {
  await coreHandler(context, req, async () => {
    await deleteTodoService(req.params.todoId, req.userId);

    response(context, { message: 'todo deleted' });
  });
}

const getTodo = async (context, req) => {
  await coreHandler(context, req, async () => {
    const todo = await getTodoService(req.params.todoId, req.userId);

    response(context, { todo });
  });
}

module.exports = {
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  getTodo
}