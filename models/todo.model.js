const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  task: { type: String, trim: true, required: true },
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model("todo", todoSchema);
