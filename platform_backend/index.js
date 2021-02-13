const express = require("express");
const bodyparser = require("body-parser");
const app = express();


const port = process.env.port || 5000;

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

// simple route
app.get("/", (req, res) => {
    res.send("hello my app");
});

//usermaster routes callling 
const userRoutes = require("./app/routes/user.routes");
//question master routes calling
const questionRoutes = require("./app/routes/question.routes");
//answer master routes calling
const answerRoutes = require("./app/routes/answer.routes");
const signuprouter = require("./app/routes/Signup.route");

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/question', questionRoutes);
app.use('/api/v1/answer', answerRoutes);
app.use('/api/v1/signup', signuprouter)


// set port, listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});