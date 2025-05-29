// models/todoModel.js

const mongoose = require('mongoose');

// Define schema for a Todo
const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true }); // adds createdAt, updatedAt

module.exports = mongoose.model('Todo', todoSchema);
