const ApiError = require('./errors/apiError');
const addTodoSchema = require('./request/addTodoSchema');
const updateTodoSchema = require('./request/updateTodoSchema');
const addTodoService = require('./service/addTodoService');
const deleteTodoService = require('./service/deleteTodoService');
const getTodoService = require('./service/getTodoService');
const getTodosService = require('./service/getTodosService');
const updateTodoService = require('./service/updateTodoService');
const response = require('./util/response');
const validation = require('./util/validation');

const addTodo = async (context, req) => {
  try {
    validation(addTodoSchema, req.body);

    const { text } = req.body;
    await addTodoService(text);

    response(context, { message: "todo added" });
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      response(context, { errors: error.message }, error.statusCode);
    } else {
      response(context, { message: 'Internal Server Error' }, 500);
    }
  }
  context.done();
}

const getTodos = async (context, req) => {
  try {
    const todos = await getTodosService();

    response(context, { todos });
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      response(context, { errors: error.message }, error.statusCode);
    } else {
      response(context, { message: 'Internal Server Error' }, 500);
    }
  }
  context.done();
}

const updateTodo = async (context, req) => {
  try {
    validation(updateTodoSchema, req.body);

    await updateTodoService(req.params.todoId, req.body);

    response(context, { message: 'todo updated' });
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      response(context, { errors: error.message }, error.statusCode);
    } else {
      response(context, { message: 'Internal Server Error' }, 500);
    }
  }
  context.done();
}

const deleteTodo = async (context, req) => {
  try {
    await deleteTodoService(req.params.todoId);

    response(context, { message: 'todo deleted' });
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      response(context, { errors: error.message }, error.statusCode);
    } else {
      response(context, { message: 'Internal Server Error' }, 500);
    }
  }
  context.done();
}

const getTodo = async (context, req) => {
  try {
    const todo = await getTodoService(req.params.todoId);

    response(context, { todo });
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      response(context, { errors: error.message }, error.statusCode);
    } else {
      response(context, { message: 'Internal Server Error' }, 500);
    }
  }
  context.done();
}

module.exports = {
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  getTodo
}