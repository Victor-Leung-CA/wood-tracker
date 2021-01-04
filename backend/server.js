const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Initialise .env file
require('dotenv').config();
const port = process.env.PORT || 5000;

//Initialise express app
const app = express();
app.use(cors());
app.use(express.json());

//Set up default mongoose connection
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

//Get the default connection
const db = mongoose.connection;

//Router files
const usersRouter = require("./routes/user");
app.use('/users', usersRouter);
const woodRouter = require("./routes/wood");
app.use('/wood', woodRouter);

//Bind connection to error event (to get notification of connection errors)
db.on('open', () => {
    console.log("MongoDB database connection established successfully");
  })
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});