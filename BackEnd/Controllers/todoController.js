// controllers/todoController.js

const Todo = require('../Models/todoModel');

// @desc Get all todos
exports.getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
};

// @desc Create a new todo
exports.createTodo = async (req, res) => {
    const { task } = req.body;
    const todo = new Todo({ task });
    await todo.save();
    res.status(201).json(todo);
};

// @desc Update a todo
exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const updated = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
};

// @desc Delete a todo
exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: 'Todo deleted' });
};
