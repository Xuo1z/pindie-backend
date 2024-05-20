const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/categories");
const usersRouter = require("./routes/users");


const PORT = 3000;

const app = express();

connectToDatabase();

app.use(cors, bodyParser.json(), express.static(path.join(__dirname, "public")), usersRouter, gamesRouter, categoriesRouter);

app.listen(PORT, () => {
    console.log(`Сервер пашит на порту  http://localhost:${PORT}`);
});