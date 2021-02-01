const { getTodo, getTodoById, addTodo, deleteTodo, updateTodo } = require('./controller.js/todoController.js');
const { connection } = require('./dbconfig.js')

const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');



const app = express();
const todoRoutes = express.Router();
app.use(bodyParser.json());

// app.use(cors());

app.use('/todos', todoRoutes);

todoRoutes.route('/').get(getTodo);
todoRoutes.route('/:id').get(getTodoById);
todoRoutes.route('/add').post(addTodo);
todoRoutes.route('/delete/:id').delete(deleteTodo);
todoRoutes.route('/update/:id').post(updateTodo);


const PORT = 4000;
app.listen(PORT,  () => { console.log("Server is running on Port: " + PORT) });