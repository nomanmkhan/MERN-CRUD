const mongoose = require('mongoose');

const URL = 'mongodb+srv://admin:admin@cluster0.4enwe.mongodb.net/todos?retryWrites=true&w=majority'
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open',  () => { console.log("MongoDB database connection established successfully")});

module.exports.connection = connection;