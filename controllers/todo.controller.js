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
