const Todo = require("./../models/todo.model");

module.exports.getTodos = (req, res, next) => {
  Todo.find()
    .exec()
    .then(todos => {
      res.status(200).json({
        todos
      });
    })
    .catch(err => {
      res.status(501).json({
        error: err
      });
    });
};

module.exports.addTodo = (req, res, next) => {
  const todo = new Todo(req.body);

  todo.save((err, doc) => {
    if (err) {
      res.status(501).json({
        error: err
      });
    } else {
      res.status(200).json({
        todo
      });
    }
  });
};

module.exports.updateTodo = (req, res, next) => {
  const id = req.params.todoId;
  const updatedTodo = req.body.updatedTodo;

  Todo.findOne({ _id: id }, function(err, todo) {
    if (err) return res.status(501).json({ error: err });

    todo.task = updatedTodo.task;

    todo.save(function(err, updatedTodo) {
      if (err) return res.status(501).json({ error: err });
      res.json({ updatedTodo });
    });
  });
};

module.exports.deleteTodo = (req, res, next) => {
  Todo.deleteOne({ _id: req.params.todoId }, err => {
    if (err) {
      res.status(501).json({
        error: err
      });
    } else {
      res.status(200).json({
        message: "Item deleted"
      });
    }
  });
};
