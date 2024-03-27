const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  text: DataTypes.STRING,
  isDone: DataTypes.BOOLEAN,
  userId: DataTypes.INTEGER
}, { tableName: 'todos' });

module.exports = Todo;