let Todo = require('../models/todo.model.js');

// GET ALL 
const getTodo = (req, res) => {
    Todo.find(function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
}
// GET ONE 
const getTodoById = (req, res) => {
    let id = req.params.id;
    Todo.findById(id, (err, todo) => {
        if (!err) {
            res.json(todo);
        } else {
            console.log(err);
        }
    });
}
// ADD 
const addTodo = (req, res) => {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({
                'todo': 'todo added successfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
}
// DELETE 
const deleteTodo = (req, res) => {
    let id = req.params.id;

    Todo.findByIdAndDelete(id, (err, todos) => {
        if (err) {
            res.status(400).send("There was an error deleting this record");
        } else {
            res.status(200).send("data was deleted");
        }
    })
}

// UPDATE 
const updateTodo = (req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (!todo) {
            res.status(404).send("data not found");
        } else {
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save()
                .then(todo => {
                    res.json('Todo updated!');
                })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        }
    });
}

module.exports.getTodo = getTodo;
module.exports.getTodoById = getTodoById;
module.exports.addTodo = addTodo;
module.exports.deleteTodo = deleteTodo;
module.exports.updateTodo = updateTodo;