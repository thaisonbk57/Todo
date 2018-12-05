const express = require("express");

const todoController = require("./../controllers/todo.controller");

const router = express.Router();

router.get("/", todoController.getTodos);

router.post("/", todoController.addTodo);

router.put("/:todoId", todoController.updateTodo);

router.delete("/:todoId", todoController.deleteTodo);

module.exports = router;
